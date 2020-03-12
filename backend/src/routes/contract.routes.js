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

export default router;
