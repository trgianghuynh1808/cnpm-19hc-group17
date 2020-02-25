import express from 'express';
import CarController from '../controllers/account.controller';

const controller = new CarController();

const router = express.Router();

router.get(
    '/',
    controller.list
);
export default router;
