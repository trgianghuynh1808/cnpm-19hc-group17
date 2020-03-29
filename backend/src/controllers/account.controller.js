import AccountService from '../services/account.serivce';
import BaseController from './base.controller';

export default class AccountController extends BaseController {
    login(req) {
        const loginInfo = {
            username: req.body.username,
            password: req.body.password
        };
        return AccountService.login(loginInfo);
    }

    getCurrentUser() {
        return AccountService.getCurrentUser();
    }

    getProfileUser(req, res) {
        const { accountId } = res.locals.user;
        return AccountService.getProfileUser(accountId);
    }
}
