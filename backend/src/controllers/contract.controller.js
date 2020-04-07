import ContractService from '../services/contract.service';
import BaseController from './base.controller';

export default class ContractController extends BaseController {
    async create(req, res) {
        const token = req.headers['x-access-token'];
        const contract = await ContractService.create(req.body, token);
        res.json(contract);
    }

    async list(req, res) {
        const contracts = await ContractService.list(req.query);
        res.json(contracts);
    }

    async update(req, res) {
        const data = {
            id: req.params.id,
            ...req.body
        };
        const contracts = await ContractService.update(data);
        res.json(contracts);
    }
}
