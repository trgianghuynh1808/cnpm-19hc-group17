import CRUD from 'firis-service-sdk-test2/controllers';
import AccountService from '../services/account.service';

export default class AccountController {
    retrieve(req) {
        const data = {
            params: req.query.id,
            tenantId: req.query.tenantId
        };
        return AccountService.findAccount(data);
    }

    create(req) {
        return AccountService.addAccount(req.body);
    }

    update(req) {
        return AccountService.updatePassword(req.body);
    }

    login(req) {
        const { redis } = req.app.locals;
        return AccountService.login(redis, req.body);
    }

    logout(req) {
        const { redis } = req.app.locals;
        return AccountService.accountLogout(redis, req.body)
            .then(() => ({ status: 'successful' }));
    }

    refreshToken(req) {
        const { redis } = req.app.locals;
        return AccountService.refreshToken(redis, req.body);
    }

    setPublicKey(req) {
        const { redis } = req.app.locals;
        return AccountService.setPublicKey(redis, req.body);
    }

    updatePublicKey(req) {
        const { redis } = req.app.locals;
        return AccountService.updatePublicKey(redis, req.body);
    }
}
