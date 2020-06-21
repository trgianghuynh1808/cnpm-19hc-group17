import express from 'express';
import BillController from '../controllers/bill.controller';

const controller = new BillController();

const router = express.Router();

router.get(
    '/',
    controller.action('list')
);

router.get(
    '/:id',
    controller.action('retrieve')
)

export default router;
