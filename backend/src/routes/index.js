import express from 'express';
import CarRoutes from './car.routes';

const router = express.Router();

router.use('/car', CarRoutes);


export default router;
