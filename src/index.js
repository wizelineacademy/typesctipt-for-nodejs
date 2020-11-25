"use strict";
require('dotenv').config();
const port = +process.env.PORT;
const message = 'Hello, Typescript';
console.log(`${message} from the port ${port}`);
