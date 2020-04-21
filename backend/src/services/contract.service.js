/* eslint-disable camelcase */
import _ from 'lodash';
import sequelize from 'sequelize';
import md5 from 'md5';
import uuid from 'uuid/v4';
import jwt from 'jsonwebtoken';
import db from '../models';
import config from '../config';
import {
    ResourceNotFoundError, DataValidationError, AuthenticationError
} from '../components/ErrorInstance/businessErrors';
import AccountService from './account.serivce';
import { sendMailUtil } from '../utils/mail';

export default class ContractService {
    static async getContractUser(data, token, transaction) {
        const { email, phone_number, identity_id, name, address } = data;
        let contractUser = { email, phone_number, identity_id, name, address };
        if (token) {
            let userInfo;
            try {
                userInfo = await jwt.verify(token, config.jwtSecrect);
            } catch (err) {
                throw new AuthenticationError(err);
            }
            if (userInfo) {
                const { accountId } = userInfo;
                const account = await AccountService.getProfileUser(accountId);
                contractUser = {
                    email: account.user.email,
                    phone_number: account.user.phone_number,
                    identity_id: account.user.identity_id,
                    name: account.user.name,
                    address: account.user.address
                };
                return contractUser;
            }
        }
        try {
            const password = 'abc';
            const userId = uuid();
            const username = email.substring(0, email.indexOf('@'));
            await db.User.create({
                id: userId,
                email,
                phone_number,
                identity_id,
                address,
                name
            }, { transaction });
            await db.Account.create({
                id: uuid(),
                username,
                password: md5(password),
                role: 'guest',
                user_id: userId
            }, { transaction });
            await sendMailUtil({
                to: email,
                username,
                password
            });
            return contractUser;
        } catch (err) {
            throw err;
        }
    }

    static async create(data, token) {
        const { car_id } = data;
        let contractUser;
        const transaction = await db.sequelize.transaction();
        try {
            contractUser = await ContractService.getContractUser(data, token, transaction);
        } catch (err) {
            await transaction.rollback();
            if (err instanceof sequelize.ValidationError) {
                throw new DataValidationError(err);
            }
            throw err;
        }
        const car = await db.Car.findOne({ where: { id: car_id } });
        if (!car) {
            await transaction.rollback();
            throw new ResourceNotFoundError('car');
        }
        const { rent_price } = car;
        const deposit = (rent_price * 30) / 100;
        const contract = await db.Contract.create({
            ...data,
            ...contractUser,
            id: uuid(),
            deposit,
            status: 'reviewing'
        });
        await transaction.commit();
        return contract;
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
