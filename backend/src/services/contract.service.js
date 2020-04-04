import _ from 'lodash';
import db from '../models';
import { ResourceNotFoundError } from '../components/ErrorInstance/businessErrors';

export default class ContractService {

    static async create(data) {
        const { car_id } = data;
        const car = await db.Car.findOne({ id: car_id });
        if (!car) throw ResourceNotFoundError('car');
        const { rent_price } = car;
        const deposit = (rent_price * 30) / 100;
        return db.Contract.create({
            ...data,
            id: new Date().getTime(),
            deposit,
            status: 'reviewing'
        });
    }

    static update(data) {
        return db.Contract.update(
            { status: data.status },
            { where: { id: data.id } }
        );
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
