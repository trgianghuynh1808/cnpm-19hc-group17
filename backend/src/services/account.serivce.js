import db from '../models';
import {
    AuthenticationError,
    ResourceNotFoundError
} from '../components/ErrorInstance/businessErrors';
import { generate } from '../utils/token';

export default class AccountService {
    static async login({ username, password }) {
        const account = await db.Account.find({
            include: [{
                model: db.User,
                as: 'user'
            }],
            where: { username, password }
        });
        if (!account) throw new AuthenticationError('Username or Password is invalid');
        return generate({
            username: account.username,
            email: account.user.email,
            accountId: account.id
        });
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
            username: account.username
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
        return account;
    }

}
