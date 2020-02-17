import sha256 from 'sha256';
import {
    ResourceNotFoundError,
    AuthenticationError,
    TokenError
} from 'firis-service-sdk-test2/errors/BusinessErrors';
import uuidv4 from 'uuid/v4';
import db from '../models';
import BaseService from './base.services';
import StaffService from './staff.service';
import TokenService from './token.service';
import config from '../config';
// import tokenStorage from '../token-helpers/tokenStorage';

export default class AccountService extends BaseService {

    static getHashPassword(password) {
        return sha256(password);
    }
    static findAccount({ params, tenantId }) {
        const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;// eslint-disable-line
        const whereCondition = uuidV4Regex.test(params) ? { id: params, tenantId } : { username: params, tenantId }; // eslint-disable-line
        return db.Account.findOne(
            {
                where: whereCondition,
                include: [
                    {
                        model: db.AccountRole,
                        as: 'roles'
                    },
                    {
                        model: db.AccountApiKey,
                        as: 'account_api_key'
                    }
                ]
            }).then((account) => {
                if (!account) {
                    throw new ResourceNotFoundError('account');
                }
                return account;
            });
    }
    static addAccount({ username, password, roles, tenantId }) {
        return db.sequelize.transaction(
            (t) => db.Account.create(
                {
                    username,
                    password,
                    tenantId,
                    roles: roles.reduce((arrRoles, role) => [...arrRoles, { role }], [])
                },
                {
                    include: [{
                        model: db.AccountRole,
                        as: 'roles'
                    }]
                },
                {
                    transaction: t
                }
            )
        );
    }
    static async preparePayload(accountId, accountRoles, tenantId) {
        if (accountRoles.indexOf('company_admin') !== -1 ||
            accountRoles.indexOf('super_admin') !== -1) {
            return {
                account: {
                    id: accountId,
                    roles: accountRoles,
                    tenant_id: tenantId
                }
            };
        }
        const internalPayload = {
            account: {
                id: accountId,
                roles: accountRoles,
                tenant_id: tenantId
            }
        };
        const token = TokenService.signInternalToken(internalPayload);
        const { data } = await StaffService.getStaffInfo(token, accountId);
        return {
            account: {
                id: accountId,
                roles: accountRoles,
                tenant_id: data.tenant_id
            },
            staff: {
                id: data.id,
                branch_id: data.branch_id,
                tenant_id: data.tenant_id
            }
        };
    }
    static updatePassword({ username, password, tenantId }) {
        return this.findAccount({ params: username, tenantId })
            .then((account) => account.updateAttributes({ password }));
    }

    static async login(redis, { username, password }) {
        return db.Account.findOne({
            where: {
                username,
                passwordHash: this.getHashPassword(password)
            },
            include: [{
                model: db.AccountRole,
                as: 'roles'
            }]
        }).then(async (account) => {
            if (!account) {
                throw new AuthenticationError('Username or password is invalid');
            }
            const { id, roles, tenantId } = account;
            const accountRoles = Array.isArray(roles)
                ? roles.map(item => item.role) : [];
            const payload = await this.preparePayload(id, accountRoles, tenantId);
            const tokenId = uuidv4();
            const token = TokenService.signToken(payload);
            const refreshToken = TokenService.signRefreshToken({ tokenId });
            const { exp: tokenExp } = TokenService.verifyToken(token);
            const { exp: refreshTokenExp } = TokenService.verifyToken(refreshToken);
            await redis.set(id, tokenId, 'PX', config.refreshTokenExpiration);
            return {
                username,
                accountId: id,
                companyId: tenantId,
                roles: accountRoles,
                token: {
                    token,
                    tokenExp
                },
                refreshToken: {
                    refreshToken,
                    refreshTokenExp
                }
            };
        });
    }
    static async refreshToken(redis, { accountId, refreshToken, tenantId }) {
        const { roles } = await this.findAccount({ params: accountId, tenantId });
        const accountRoles = Array.isArray(roles)
            ? roles.map(item => item.role) : [];
        const tokenIdFromRedis = await redis.get(accountId);
        const { tokenId } = TokenService.verifyToken(refreshToken);
        if (!tokenIdFromRedis) {
            throw new TokenError('refreshToken does not exist in redis');
        }
        if (tokenIdFromRedis !== tokenId) {
            throw new
                TokenError('refreshToken does not match with token in redis');
        }
        const payload = await this.preparePayload(accountId, accountRoles, tenantId);
        const token = TokenService.signToken(payload);
        const { exp: tokenExp } = TokenService.verifyToken(token);
        return {
            token,
            tokenExp
        };
    }
    static async setPublicKey(redis, { accountId, tenantId, publicKey }) {
        const { roles } = await this.findAccount({ params: accountId, tenantId });
        const accountRoles = Array.isArray(roles)
            ? roles.map(item => item.role) : [];
        const internalPayload = {
            account: {
                id: accountId,
                roles: accountRoles,
                tenant_id: tenantId
            }
        };
        const token = TokenService.signInternalToken(internalPayload);
        const { data } = await StaffService.getStaffInfo(token, accountId);
        const { apiKey } = await db.sequelize.transaction(
            (t) => db.AccountApiKey.create(
                {
                    accountId,
                    publicKey
                },
                {
                    transaction: t
                }
            )
        );
        const userData = {
            account: {
                id: accountId,
                roles: accountRoles,
                tenant_id: data.tenant_id
            },
            staff: {
                id: data.id,
                branch_id: data.branch_id,
                tenant_id: data.tenant_id
            },
            publicKey
        };
        await redis.set(apiKey, JSON.stringify(userData));
        return { apiKey };
    }

    static async updatePublicKey(redis, { accountId, tenantId, publicKey }) {
        const { roles } = await this.findAccount({ params: accountId, tenantId });
        const accountRoles = Array.isArray(roles)
            ? roles.map(item => item.role) : [];
        const internalPayload = {
            account: {
                id: accountId,
                roles: accountRoles,
                tenant_id: tenantId
            }
        };
        const token = TokenService.signInternalToken(internalPayload);
        const { data } = await StaffService.getStaffInfo(token, accountId);
        return db.AccountApiKey.find(
            {
                where: {
                    accountId
                }
            }
        ).then(async (item) => {
            if (!item) throw new ResourceNotFoundError('account');
            await item.updateAttributes({ publicKey });
            await redis.del(accountId);
            const userData = {
                account: {
                    id: accountId,
                    roles: accountRoles,
                    tenant_id: data.tenant_id
                },
                staff: {
                    id: data.id,
                    branch_id: data.branch_id,
                    tenant_id: data.tenant_id
                },
                publicKey
            };
            await redis.set(item.apiKey, JSON.stringify(userData));
            return { apiKey: item.apiKey };
        });
    }

    static async accountLogout(redis, { accountId }) {
        await redis.del(accountId);
    }
}
