import _ from 'lodash'
import {
    ResourceNotFoundError,
} from '../components/ErrorInstance/businessErrors';
import db from '../models';
// import tokenStorage from '../token-helpers/tokenStorage';

export default class AccountService {

    static list(params) {
        const obj = _.omit(params, ['limit', 'offset'])
        let filterCondition = Object.keys(obj).map(key => ({ [key]: obj[key] }))
        const whereCondition = filterCondition.length > 0 ? { $or: [...filterCondition] } : undefined
        return db.Car.findAll({
            where: whereCondition,
            limit: params.limit,
            offset: params.offset
        }).then((car) => {
            if (car.length < 0) {
                    throw new ResourceNotFoundError('car');
                }
                return car;
            });
    }
}
