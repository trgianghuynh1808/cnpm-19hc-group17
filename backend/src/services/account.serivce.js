import db from '../models';
import { AuthenticationError } from '../components/ErrorInstance/businessErrors';
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
            email: account.user.email
        });
    }
}
