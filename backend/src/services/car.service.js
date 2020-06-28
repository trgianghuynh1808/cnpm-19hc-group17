/* eslint-disable max-len */
import _ from 'lodash';
import db from '../models';
import { ResourceNotFoundError } from '../components/ErrorInstance/businessErrors';

export default class CarService {
    static list(params) {
        const obj = _.omit(params, ['limit', 'offset']);
        let whereCondition = obj ? { ...obj } : undefined;
        if (whereCondition.model) {
            whereCondition = { ...whereCondition, model: { $like: `%${whereCondition.model}%` } };
        }
        return db.Car.findAll({
            include: [{
                model: db.Brand,
                as: 'brandInfo'
            },
            {
                model: db.Model,
                as: 'modelInfo'
            },
            {
                model: db.Contract,
                as: 'contracts',
                include: [
                    {
                        model: db.Bill,
                        as: 'bill'
                    }
                ]
            }],
            where: whereCondition,
            limit: params.limit,
            offset: params.offset
        }).then(async (cars) => ({
            data: cars,
            count: await db.Car.count()
        }));
    }

    static retrive(id) {
        return db.Car.find({
            include: [{
                model: db.Brand,
                as: 'brandInfo'
            },
            {
                model: db.Model,
                as: 'modelInfo'
            },
            {
                model: db.Contract,
                as: 'contracts',
                include: [
                    {
                        model: db.Bill,
                        as: 'bill'
                    }
                ]
            }],
            where: { id }
        }).then((car) => {
            if (!car) {
                throw new ResourceNotFoundError('car');
            }
            return car;
        });
    }

    static async update(data) {
        const { carId, status } = data;
        try {
            await db.Car.update(
                { status },
                { where: { id: carId } }
            )
            return 'success';
        } catch (err) {
            return 'fail';
        }
    }
}
