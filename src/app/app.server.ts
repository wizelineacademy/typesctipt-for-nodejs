import express, { Express } from 'express';
import { router as cakeRouter } from './routes/cake.router';
const app: Express = express();

app.use(cakeRouter);

export const initServer = (port: number) => {
  app.listen(port, function() {
    console.log('Server listening on port', port);
  });
}