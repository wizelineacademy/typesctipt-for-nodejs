import express, { Express } from 'express';
import { router as cakeRouter } from './cake/cake.router';
import { router as salesRouter } from './sale/sales.router';
// Explicit var type on declaration BP/GI (Best Practise/Gute Idee)
const app: Express = express();

// router
app.use('/cakes', cakeRouter);
app.use('/sales', salesRouter);
// HTTP Server factory function
export function initServer(port: number) {
  app.listen(port, () => {
    console.log('HTTP Server listening on port: ', port);
  });
}
