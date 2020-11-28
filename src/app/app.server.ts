import express, { Express, Router } from "express";
import {router as cakeRouter } from './cakes/cake.router';
import {router as saleRouter } from './sales/sale.router';

const app: Express = express();
const router: Router = Router();

app.use(express.json());

router.use('/cake', cakeRouter);
router.use('/sale', saleRouter);
app.use(router);

export function initServer(port: number){
    app.listen(port, function(){
        console.log('Server listen on port', port);
    });
}

