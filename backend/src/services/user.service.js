import db from '../models';
import { ResourceNotFoundError } from '../components/ErrorInstance/businessErrors';

export default class ContractService {

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
        };
    }
}
