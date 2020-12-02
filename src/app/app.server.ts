import express, { Express } from 'express';

import cakeRouter from './cake/cake.router';
import saleRouter from './sale/sale.router';

export const app: Express = express();

app.use(express.json());

app.use('/cakes', cakeRouter);
app.use('/sales', saleRouter);

