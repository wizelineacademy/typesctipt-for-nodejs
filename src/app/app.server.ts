
import express, { Router } from "express";
import { ENV } from "../env/env";

import {router as breadRouter} from "./bread/bread.router";

const app = express();


app.use(breadRouter);

const {PORT} = ENV;

export function startServer(){
   app.listen(PORT, () => {
        console.log(`listening at http://localhost:${PORT}`)
    })
}