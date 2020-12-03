import express, { Express } from 'express';
import { router as cakeRouter } from './cake/cake.router';
import { router as salesRouter } from './sales/sales.router';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(bodyParser.json());
app.use('/cakes', cakeRouter);
app.use('/sales', salesRouter);

export const initServer = (port: number) => {
  app.listen(port, () => {
    console.log('Server started in port', port);
  });
};
