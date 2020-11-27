import express, { Express } from 'express';
import { router as cakeRouter } from './routes/cake.router';
import { router as sellRouter } from './routes/sell.router';

const app: Express = express();
app.use(cakeRouter);
app.use(sellRouter);

export const initServer = (port: number) => {
  app.listen(port, function () {
    console.log('Server listening on port', port);
  });
};
