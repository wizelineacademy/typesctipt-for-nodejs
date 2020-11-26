import express, { Express } from 'express';
import { router as breadRouter } from './routes/bread.router';
import { router as cakeRouter } from './routes/cake.router';

const app: Express = express();

app.use('/breads', breadRouter);
app.use('/cakes', cakeRouter);

export const initServer = (port: number) => {
  app.listen(port, () => {
    console.log('Server started in port', port);
  });
};
