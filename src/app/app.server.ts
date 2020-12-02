import express, { Express, Router } from 'express';
import bodyParser from 'body-parser';
import { router as cakeRouter }from './cake/cake.router';
import { router as saleRouter }from './sale/sale.router';

const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router: Router = Router();

export const server= 'Server for Cakes Operation';

// config router

// use routes
router.use('/cakes',cakeRouter);
router.use('/sales',saleRouter);

app.use(router);

export function initServer(port:number){
  app.listen(port,  function(){
    console.log(`Server[${server}] listening on port [${port}]`);
  })
}
