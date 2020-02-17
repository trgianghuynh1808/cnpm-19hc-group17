import express from 'express';
const router = express.Router();

router.get(
    '/healthz',
    (req, res, next) => res.send({ msg: 'successssssssssss' })
);


export default router;
