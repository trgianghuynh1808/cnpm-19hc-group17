import sequelize from 'sequelize';
import { AppError } from './appErrors';

export class BusinessError extends AppError {
    constructor(message = 'There is business error happened') {
        super(message);
        this.name = 'BusinessError';
        this.status = 400;
    }
}

export class APINotFoundError extends BusinessError {
    constructor(message = 'API not found') {
        super(message);
        this.name = 'APINotFoundError';
        this.status = 404;
    }
}

export class DataValidationError extends BusinessError {
    constructor(err) {
        super(err.message);
        this.name = 'DataValidationError';
        this.status = 400;
        if (err instanceof sequelize.ValidationError) {
            this.payload = err.errors.reduce((finalErrors, itemError) => ({
                ...finalErrors,
                [itemError.path]: {
                    message: itemError.message,
                    type: itemError.validatorKey,
                    context: {
                        value: itemError.value,
                        agrs: itemError.validatorArgs
                    }
                }
            }), {});
        }
    }
}

export class CustomValidationError extends BusinessError {
    constructor(message = 'Bad request.') {
        super(message);
        this.message = message;
        this.name = 'CustomValidationError';
        this.status = 400;
    }
}

export class RequestValidationError extends BusinessError {
    constructor(err) {
        super(err.message);
        this.name = 'RequestValidationError';
        this.status = 400;
        this.payload = err.details.reduce((finalErrors, { path, message, context, type }) =>
            ({ ...finalErrors, [path]: { message, type, context } }), {});
    }
}

export class RequestParamValidationError extends RequestValidationError {
    constructor(err) {
        super(err);
        this.name = 'RequestParamValidationError';
    }
}

export class RequestQueryValidationError extends RequestValidationError {
    constructor(err) {
        super(err);
        this.name = 'RequestQueryValidationError';
    }
}

export class RequestBodyValidationError extends RequestValidationError {
    constructor(err) {
        super(err);
        this.name = 'RequestBodyValidationError';
    }
}

export class ResourceNotFoundError extends BusinessError {
    constructor(entityType = 'entity') {
        super(`Could not find ${entityType}`);
        this.name = 'ResourceNotFoundError';
        this.status = 404;
    }
}

export class AuthenticationError extends BusinessError {
    constructor(message = 'You need to authenicate to access this resource') {
        super(message);
        this.name = 'AuthenticationError';
        this.status = 401;
    }
}

export class TokenError extends BusinessError {
    constructor(message = 'You need to provide valid token to access this resource') {
        super(message);
        this.name = 'TokenError';
        this.status = 401;
    }
}

export class AuthorizationError extends BusinessError {
    constructor(message = 'You are not authorized to access this resource') {
        super(message);
        this.name = 'AuthorizationError';
        this.status = 403;
    }
}
