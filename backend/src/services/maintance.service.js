/* eslint-disable max-len */
import db from '../models';

export default class MaintanceService {
    static async create(data) {
        const { billId, maintainceList } = data;
        const maintanceData = maintainceList.map(maintance => ({ ...maintance, bill_id: billId }));
        return db.Maintance.bulkCreate(maintanceData);
    }
}
