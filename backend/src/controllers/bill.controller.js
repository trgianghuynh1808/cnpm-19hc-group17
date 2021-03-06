import BaseController from './base.controller';
import BillService from '../services/bill.service';

export default class BillControlller extends BaseController {
    list(req) {
        return BillService.list(req.query);
    }

    retrieve(req) {
        return BillService.retrieve(req.params.id);
    }

    update(req) {
        const billId = req.params.id;
        return BillService.update({ billId, ...req.body });
    }
}
