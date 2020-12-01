import express, { Express, Router } from "express";
import bodyParser from "body-parser";
import { router as cakeRouter } from './cake/cake.router';
import { router as saleRouter } from './sale/sale.router';

const app: Express = express();
const router: Router = Router();

router.use('/cakes', cakeRouter);
router.use('/sales', saleRouter);

app.use(bodyParser.json());
app.use(router);

export function initServer(port: number) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}