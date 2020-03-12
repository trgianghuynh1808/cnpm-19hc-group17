import ContractService from '../services/contract.service';

export default class ContractController {
    async create(req, res) {
        const contract = await ContractService.create(req.body);
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
