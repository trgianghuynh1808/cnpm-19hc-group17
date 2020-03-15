import express from 'express';
import CarController from '../controllers/car.controller';

const controller = new CarController();

const router = express.Router();

router.get(
    '/',
    controller.action('list')
);

router.get(
    '/:id',
    controller.action('retrive')
);

export default router;
