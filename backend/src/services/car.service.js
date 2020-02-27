/* eslint-disable max-len */
import _ from 'lodash';
import {
    ResourceNotFoundError
} from '../components/ErrorInstance/businessErrors';
import db from '../models';

export default class CarService {

    static list(params) {
        const obj = _.omit(params, ['limit', 'offset']);
        const filterCondition = Object.keys(obj).map(key => ({ [key]: obj[key] }));
        const whereCondition = filterCondition.length > 0 ? { $or: [...filterCondition] } : undefined;
        return db.Car.findAll({
            include: [{
                model: db.Brand,
                where: {
                    id: params.brand
                },
                as: 'brandInfo'
            },
            {
                model: db.Model,
                where: {
                    id: params.brand
                },
                as: 'modelInfo'
            }],
            where: whereCondition,
            limit: params.limit,
            offset: params.offset
        }).then((car) => {
            if (car.length === 0) {
                throw new ResourceNotFoundError('car');
            }
            return car;
        });
    }
}
