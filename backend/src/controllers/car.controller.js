import CarService from '../services/car.service';

export default class CarController {
    async list(req, res) {
        const cars = await CarService.list(req.query);
        res.json(cars);
    }

    async retrive(req, res) {
        const car = await CarService.retrive(req.params.id);
        res.json(car);
    }
}
