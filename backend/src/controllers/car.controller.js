import CarService from '../services/car.service';
import BaseController from './base.controller';

export default class CarController extends BaseController {
    list(req) {
        return CarService.list(req.query);
    }

    retrive(req) {
        return CarService.retrive(req.params.id);
    }

    update(req) {
        const carId = req.params.id;
        return CarService.update({ carId, ...req.body });
    }
}
