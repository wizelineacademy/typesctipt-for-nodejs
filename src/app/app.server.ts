import express, { Express } from 'express';
import { router as breadRouter } from './routes/bread.router';
const app: Express = express();

app.use(breadRouter);

export const initServer = (port: number) => {
  app.listen(port, function() {
    console.log('Server listening on port', port);
  });
}