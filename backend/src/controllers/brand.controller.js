import BrandService from '../services/brand.service';
import BaseController from './base.controller';

export default class BrandControlller extends BaseController {
    carsGroupByBrands(req) {
        return BrandService.carsGroupByBrands(req.query);
    }

    list(req){
        return BrandService.list(req.query);
    }
}
