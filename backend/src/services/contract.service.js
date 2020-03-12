import _ from 'lodash';
import db from '../models';

export default class ContractService {

    static create(data) {
        return db.Contract.create({ id: new Date().getTime(), ...data });
    }

    static list(params) {
        const obj = _.omit(params, ['limit', 'offset']);
        const filterCondition = Object.keys(obj).map(key => ({ [key]: obj[key] }));
        const whereCondition = filterCondition.length > 0 ?
            { $or: [...filterCondition] } : undefined;
        return db.Contract.findAll({
            include: [{
                model: db.Car,
                as: 'car'
            }],
            where: whereCondition,
            limit: params.limit,
            offset: params.offset
        }).then(contracts => ({
            data: contracts,
            count: contracts.length
        }));
    }
}
