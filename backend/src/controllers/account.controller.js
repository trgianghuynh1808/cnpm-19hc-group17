import AccountService from '../services/account.serivce';
import BaseController from './base.controller';

export default class AccountController extends BaseController {
    login(req) {
        const loginInfo = {
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        };
        return AccountService.login(loginInfo);
    }

    getCurrentUser(req, res) {
        const { accountId } = res.locals.user;
        return AccountService.getCurrentUser(accountId);
    }

    getProfileUser(req, res) {
        const { accountId } = res.locals.user;
        return AccountService.getProfileUser(accountId);
    }

    update(req, res) {
        console.log('req.body-----------', req.body);
        const { accountId } = res.locals.user;
        return AccountService.update({ accountId, data: req.body });
    }
}
