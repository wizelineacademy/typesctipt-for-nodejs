import {Router} from 'express'

export const router : Router = Router();

router.route('/').get(function (req, res) {
    res.json('Hello, Breads!');
});

router.route('/').post(function (req, res) {
    res.json('Hello, Breads! POST');
});

router.route('/').put(function (req, res) {
    res.json('Hello, Breads! PUT');
});

router.route('/').delete(function (req, res) {
    res.json('Hello, Breads! DELETE');
});