import sequelize from 'sequelize';
import db from '../models';
import {
    AuthenticationError,
    ResourceNotFoundError,
    DataValidationError
} from '../components/ErrorInstance/businessErrors';
import { generate } from '../utils/token';

export default class AccountService {
    static async login({ username, password, role = 'guest' }) {
        const account = await db.Account.find({
            include: [{
                model: db.User,
                as: 'user'
            }],
            where: { username, password }
        });
        if (!account) throw new AuthenticationError('Username or Password is invalid');
        return {
            token: generate({
                username: account.username,
                email: account.user.email,
                accountId: account.id
            }),
            message: 'Welcome'
        };
    }

    static async getCurrentUser(accountId) {
        const account = await db.Account.find({
            include: [{
                model: db.User,
                as: 'user'
            }],
            where: { id: accountId }
        });
        if (!account) throw new ResourceNotFoundError('Account');
        return {
            email: account.user.email,
            username: account.username,
            role: account.role
        };
    }

    static async getProfileUser(accountId) {
        const account = await db.Account.find({
            include: [{
                model: db.User,
                as: 'user'
            }],
            where: { id: accountId }
        });
        if (!account) throw new ResourceNotFoundError('Account');
        const accountData = account.toJSON();
        delete accountData.password;
        return accountData;
    }

    static async update({ accountId, data }) {
        const transaction = await db.sequelize.transaction();
        try {
            if (data.role) {
                await db.Account.update(
                    { role: data.role },
                    { where: { id: accountId }, transaction }
                );
            }
            if (data.password) {
                await db.Account.update(
                    { password: data.password },
                    { where: { id: accountId }, transaction }
                );
            }
            const account = await db.Account.findOne({ where: { id: accountId } });
            if (!account) throw new ResourceNotFoundError('Account');
            await db.User.update(
                { ...data },
                { where: { id: account.user_id }, transaction }
            );
            await transaction.commit();
            return true;
        } catch (err) {
            await transaction.rollback();
            if (err instanceof sequelize.ValidationError) {
                throw new DataValidationError(err);
            }
            throw err;
        }
    }
}
