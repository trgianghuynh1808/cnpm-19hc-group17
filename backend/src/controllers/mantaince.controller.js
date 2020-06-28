import MantainceService from '../services/maintance.service';
import BaseController from './base.controller';

export default class MantainceController extends BaseController {
    async create(req, res) {
        const data = req.body;
        return MantainceService.create(data);
    }
}
