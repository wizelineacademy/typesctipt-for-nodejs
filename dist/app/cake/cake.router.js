"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = express_1.Router();
exports.router.route('/')
    .post((req, res) => {
    res.json('This endpoint registers a new cake');
})
    .get((req, res) => {
    res.json('This endpoint lists all the cakes');
})
    .put((req, res) => {
    res.json('This endpoint updates a registered cake');
});
exports.router.route('/:id').get((req, res) => {
    res.json(`This endpoint gets the cake with id: ${req.params.id}`);
});
