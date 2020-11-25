"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = express_1.Router();
exports.router.route('/')
    .post((req, res) => {
    res.json('This endpoint registers a new sell');
})
    .get((req, res) => {
    res.json('This endpoint lists all the sales given a week and year');
});
