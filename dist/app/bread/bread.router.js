"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = express_1.Router();
exports.router.route("/").get((req, res) => {
    res.json("breads");
});
//# sourceMappingURL=bread.router.js.map