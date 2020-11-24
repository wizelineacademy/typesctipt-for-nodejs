import express, { Express, Router } from 'express';
import { router as breadRouter }from './bread/bread.router';
import { router as cakeRouter }from './cake/cake.router';
import { router as saleRouter }from './sale/sale.router';

const app : Express = express();

const router: Router = Router();

export const server: string= 'Server for Cakes Operation';

// config router

// use routes
router.use('/breads',breadRouter);
router.use('/cakes',cakeRouter);
router.use('/sales',saleRouter);

app.use(router);

export function initServer(port:number){
    app.listen(port,  function(){
        console.log(`Server[${server}] listening on port [${port}]`);
    })
}
