import BrandService from '../services/brand.service';
import BaseController from './base.controller';

export default class BrandControlller extends BaseController {
    list(req) {
        return BrandService.list(req.query);
    }
}
