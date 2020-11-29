import express, { Express, Router } from "express";
import {router as cakeRouter} from "./cake/cake.router";
import {router as saleRouter} from "./sale/sale.router";

const app: Express = express();

app.use('/cakes', cakeRouter);
app.use('/sales', saleRouter);

export function initServer(port: number) {
  app.listen(port, () => {
    console.log('Server listen on port', port);
  });
}
