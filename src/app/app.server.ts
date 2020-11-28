
import express, { Router } from "express";
import { ENV } from "../env/env";

import { cakeRouter} from "./cake/cake.router";
import { saleRouter}  from "./sale/sale.router";

const app = express();


app.use(cakeRouter);
app.use(saleRouter);

const {PORT} = ENV;

export function startServer(){
   app.listen(PORT, () => {
        console.log(`listening at http://localhost:${PORT}`)
    })
}




