import db from '../models';
import { AuthenticationError } from '../components/ErrorInstance/businessErrors';
import { generate } from '../utils/token';

export default class AccountService {
    static async login({ username, password }) {
        const account = await db.Account.find({ where: { username, password } });
        if (!account) throw new AuthenticationError('Username or Password is invalid');
        return generate(account.toJSON());
    }
}
