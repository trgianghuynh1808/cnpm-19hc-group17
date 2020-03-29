import express from 'express';
import BrandController from '../controllers/brand.controller';

const controller = new BrandController();

const router = express.Router();

router.get(
    '/',
    controller.action('list')
);

export default router;
