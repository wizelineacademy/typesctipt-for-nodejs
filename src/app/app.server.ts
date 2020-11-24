import express, { Express, Router } from 'express';
import { router as breadRouter } from './routes/bread.router';

const app: Express = express();

const router: Router = Router();

app.use('/breads', breadRouter);

export const initServer = (port: number) => {
  app.listen(port, () => {
    console.log('Server started in port', port);
  });
};
