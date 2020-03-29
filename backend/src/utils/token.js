import jwt from 'jsonwebtoken';
import config from '../config';

export function generate(data) {
    return jwt.sign(data, config.jwtSecrect);
}

