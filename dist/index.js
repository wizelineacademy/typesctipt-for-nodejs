"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app_server_1 = require("./app/app.server");
const port = +process.env.PORT;
app_server_1.initServer(port);
