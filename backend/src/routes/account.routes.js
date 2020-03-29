import express from 'express';
import AccountController from '../controllers/account.controller';
import { verifyJWT } from '../components/auth';

const controller = new AccountController();

const router = express.Router();

router.post(
    '/login',
    controller.action('login')
);

router.get(
    'getCurrentUser',
    controller.action('getCurrentUser')
);

router.get(
    '/getProfileUser',
    verifyJWT,
    controller.action('getProfileUser')
);
export default router;
