import express, { Express } from 'express';
import { router as cakeRouter } from './cake/cake.router';
import { router as sellRouter } from './sell/sell.router';
import bodyParser from 'body-parser';

const app: Express = express();
app.use(bodyParser.json());
app.use(cakeRouter);
app.use(sellRouter);

export const initServer = (port: number) => {
  app.listen(port, function () {
    console.log('Server listening on port', port);
  });
};
