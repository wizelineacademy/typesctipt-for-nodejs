import express, { Express } from 'express';
import { router as breadRouter } from './bread/bread.router';
import { router as cakeRouter } from './cake/cake.router';
import { router as salesRouter } from './sales/sales.router';

const app: Express = express();

app.use('/breads', breadRouter);
app.use('/cakes', cakeRouter);
app.use('/sales', salesRouter);

export const initServer = (port: number) => {
  app.listen(port, () => {
    console.log('Server started in port', port);
  });
};
