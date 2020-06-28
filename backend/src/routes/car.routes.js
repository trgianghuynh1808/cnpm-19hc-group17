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

router.put(
    '/:id',
    controller.action('update')
);

export default router;
