import express from 'express';
import ContractController from '../controllers/contract.controller';

const controller = new ContractController();

const router = express.Router();

router.post(
    '/',
    controller.create
);

router.get(
    '/',
    controller.list
);

router.put(
    '/:id',
    controller.update
);

export default router;
