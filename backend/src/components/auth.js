import jwt from 'jsonwebtoken';
import { AuthenticationError, AuthorizationError } from './ErrorInstance/businessErrors';
import config from '../config';

export function permitRole(...allowed) {
    return (req, res, next) => {
        const userData = res.locals.user;
        const isAllowed = role => allowed.indexOf(role) > -1;
        const allow = userData.account.roles ? userData.account.roles
            .find((key) => isAllowed(key)) : undefined;
        if (!allow) {
            throw new AuthorizationError('Your Role is not allowed');
        }
        next();
    };
}

export function verifyJWT(req, res, next) {
    if (res.locals.user) {
        return next();
    }
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, config.jwtSecrect, (err, decoded) => {
        if (err) {
            throw new AuthenticationError(err);
        }
        if (!decoded) {
            throw new AuthorizationError('Invalid Data for authorization');
        }
            res.locals.user = decoded; //eslint-disable-line
        next();
    });
}

export function permitAction(...allowed) {
    return (req, res, next) => {
        const isAllowed = role => allowed.indexOf(role) > -1;
        const userData = res.locals.user;
        const allow = userData.roles ? Object.entries(userData.roles)
            .find(e => e[1].find((act) => isAllowed(act)) !== undefined) : undefined;
        if (!allow) {
            throw new AuthorizationError('Your Role Action is not allowed');
        }
        next();
    };
}

export function verifyApiKey(algorithm) {
    return async (req, res, next) => {
        try {
            const apiKey = req.body['api-key'] ||
                req.query['api-key'] || req.headers['api-key'] || null;
            const apiData = await req.app.locals.redis.get(apiKey);
            const userData = JSON.parse(apiData);
            const jwtToken = req.body.token || req.query.token || req.headers['x-access-token'];
            if (!userData && !jwtToken) {
                throw new AuthenticationError({
                    message: 'invalid API Key',
                    name: 'AuthenticationError'
                });
            }
            if (!userData && jwtToken) {
                return next();
            }
            req.body = await decryptRequestData(req, userData.publicKey, algorithm); //eslint-disable-line
            delete userData.publicKey;
            res.locals.externalParty = true // eslint-disable-line
            res.locals.user = userData; //eslint-disable-line
            next();
        } catch (err) {
            next(err);
        }
    };
}
