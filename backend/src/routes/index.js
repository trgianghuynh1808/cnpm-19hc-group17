/* eslint-disable no-unused-vars */
import express from 'express';
import CarRoutes from './car.routes';
import BrandRoutes from './brand.routes';
import AccountRoutes from './account.routes';
import { BusinessError, AuthenticationError } from '../components/ErrorInstance/businessErrors';
import ContractRoutes from './contract.routes';
import { verifyJWT } from '../components/auth';

const router = express.Router();

router.use('/accounts', AccountRoutes);
router.use('/cars', CarRoutes);
router.use('/brands', BrandRoutes);
router.use('/contracts', ContractRoutes);

router.use((err, req, res, next) => {
    console.log('err-------------', err);
    if (err instanceof BusinessError) {
        res.status(err.status).send({
            name: err.name,
            message: err.message
        });
        return;
    }
    if (err instanceof AuthenticationError) {
        res.status(err.status).send({
            name: err.name,
            message: err.message
        });
        return;
    }
    res.status(err.status).send({
        ...err
    });
});

export default router;
