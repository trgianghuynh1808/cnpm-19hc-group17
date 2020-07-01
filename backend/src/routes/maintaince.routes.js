import express from 'express';
import MaintanceController from '../controllers/mantaince.controller';

const controller = new MaintanceController();

const router = express.Router();

router.post(
    '/',
    controller.action('create')
);


export default router;
