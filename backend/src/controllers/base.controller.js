export default class BaseController {
    action(funcName) {
        return async (req, res, next) => {
            try {
                const data = await this[funcName](req, res);
                res.json(data);
                return;
            } catch (err) {
                next(err);
            }
        };
    }
}
