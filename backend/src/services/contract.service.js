/* eslint-disable camelcase */
import _ from 'lodash';
import sequelize from 'sequelize';
import uuid from 'uuid/v4';
import jwt from 'jsonwebtoken';
import db from '../models';
import config from '../config';
import {
    ResourceNotFoundError, DataValidationError
} from '../components/ErrorInstance/businessErrors';
import AccountService from './account.serivce';
import { sendMailUtil } from '../utils/mail';

export default class ContractService {
    static async getContractUser(data, token, transaction) {
        const { email, phone_number, identity_id, name } = data;
        let contractUser = { email, phone_number, identity_id, name };
        if (token) {
            const userInfo = await jwt.verify(token, config.jwtSecrect);
            if (userInfo) {
                const { accountId } = userInfo;
                const account = await AccountService.getProfileUser(accountId);
                contractUser = {
                    email: account.user.email,
                    phone_number: account.user.phone_number,
                    identity_id: account.user.identity_id,
                    name: account.user.name
                };
                return contractUser;
            }
        }
        const password = 'abc';
        const userId = uuid();
        await db.User.create({
            id: userId,
            email,
            phone_number,
            identity_id,
            name
        }, { transaction });
        try {
            await db.Account.create({
                username: email,
                password,
                role: 'guest',
                user_id: userId
            }, { transaction });
        } catch (err) {
            throw new DataValidationError(err);
        }
        await sendMailUtil({
            to: email,
            username: email,
            password
        });
        return contractUser;
    }

    static async create(data, token) {
        const { car_id } = data;
        let contractUser;
        const transaction = await db.sequelize.transaction();
        try {
            contractUser = await ContractService.getContractUser(data, token, transaction);
            const car = await db.Car.findOne({ where: { id: car_id } });
            if (!car) throw new ResourceNotFoundError('car');
            const { rent_price } = car;
            const deposit = (rent_price * 30) / 100;
            const contract = await db.Contract.create({
                ...data,
                ...contractUser,
                deposit,
                status: 'reviewing'
            });
            await transaction.commit();
            return contract;
        } catch (err) {
            await transaction.rollback();
            if (err instanceof sequelize.ValidationError) {
                throw new DataValidationError(err);
            }
            throw new Error(err);
        }
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
