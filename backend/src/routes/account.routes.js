import express from 'express';
import AccountController from '../controllers/account.controller';

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

export default router;
