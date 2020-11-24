
import express, { Router } from "express";

import {router as breadRouter} from "./bread/bread.router";

const app = express();


app.use(breadRouter);

const port = process.env.PORT;


export function startServer(){
   app.listen(port, () => {
        console.log(`listening at http://localhost:${port}`)
    })
}