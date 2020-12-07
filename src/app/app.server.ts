
import express from "express";
import { errorHandler} from "../component/error.handler";
import { ENV } from "../env/env";

import { cakeRouter} from "./cake/cake.router";
import { saleRouter}  from "./sale/sale.router";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cakeRouter);
app.use(saleRouter);
app.use(errorHandler)

const {PORT} = ENV;

export function startServer(){
   app.listen(PORT, () => {
        console.log(`listening at http://localhost:${PORT}`)
    })
}




