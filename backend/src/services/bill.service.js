/* eslint-disable max-len */
import moment from 'moment';
import db from '../models';

export default class BillService {
    static async list(filter) {
        const { brand } = filter;
        let whereCondition = null;
        if (brand) {
            whereCondition = { '$contract.car.brand$': brand };
        }
        const bills = await db.Bill.findAll({
            include: [
                {
                    model: db.Contract,
                    as: 'contract',
                    include: [
                        {
                            model: db.Car,
                            as: 'car'
                        }
                    ]
                }
            ],
            where: whereCondition
        });
        return {
            data: bills.map(bill => {
                return (
                    {
                        idBill: bill.id,
                        startRentDate: bill.contract.start_rent_date,
                        endRentDate: bill.car_return_date,
                        totalPrice: bill.total_price,
                        nameModel: bill.contract.car.model,
                        brandModel: bill.contract.car.brand

                    }

                )
            }),
            total: bills.length
        }
    }

    static async retrieve(id) {
        const bill = await db.Bill.findOne({
            include: [
                {
                    model: db.Contract,
                    as: 'contract',
                    include: [
                        {
                            model: db.Car,
                            as: 'car'
                        }
                    ]
                },
                {
                    model: db.Maintance,
                    as: 'maintances',
                    include: {
                        model: db.Account,
                        as: 'staff',
                        include: [{
                            model: db.User,
                            as: 'user'
                        }]
                    }
                }

            ],
            where: { id }
        });
        let rentPrice = moment(bill.contract.start_rent_date).diff(moment(bill.car_return_date), 'days') *
            bill.contract.car.rent_price;
        let total = rentPrice;
        const data = {
            nameCustomer: bill.contract.name,
            model: bill.contract.car.model,
            brand: bill.contract.car.brand,
            startRentDate: bill.contract.start_rent_date,
            endRentDate: bill.car_return_date,
            carPrice: bill.contract.car.car_price,
            rentPrice,
            depositPrice: bill.contract.deposit,
            maintances: bill.maintances.map(maintance => {
                const { price } = maintance;
                total += price
                return (
                    {
                        id: maintance.id,
                        name: maintance.staff.user.name,
                        description: maintance.description,
                        price
                    }
                )
            }),
            total
        }
        return data;
    }

    static async update(data) {
        const { billId, compensation_money, status, note } = data;
        try {
            await db.Bill.update(
                { compensation_money, status, note },
                { where: { id: billId } }
            )
            return 'success';
        } catch (err) {
            return 'fail';
        }
    }
}

