import express, { Express, Router } from "express";
import { router as cakeRouter } from './cake/cake.router';
import { router as saleRouter } from './sale/sale.router';

const app: Express = express();
const router: Router = Router();

router.use('/cake', cakeRouter);
router.use('/sale', saleRouter);

app.use(router);

export function initServer(port: number) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}