import express from 'express';
import { permitRole } from 'firis-service-sdk-test2/auth';
import AccountController from '../controllers/account.controller';

const controller = new AccountController();

const router = express.Router();

router.get(
    '/',
    permitRole('company_admin', 'super_admin'),
    controller.retrieve
);

router.post(
    '/',
    permitRole('company_admin', 'super_admin'),
    controller.create
);
router.put(
    '/updatePassword',
    permitRole('company_admin', 'super_admin'),
    controller.update
);
router.post('/setPublicKey',
    permitRole('company_admin', 'super_admin'),
    controller.setPublicKey
);

router.put('/updatePublicKey',
    permitRole('company_admin', 'super_admin'),
    controller.updatePublicKey
);

export default router;
