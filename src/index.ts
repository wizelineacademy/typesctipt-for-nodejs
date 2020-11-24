import { initServer } from './app/app.server';
import * as dotenv from "dotenv";
dotenv.config();

let port: number = 3000;

if(process.env.PORT!==undefined){
    port = +process.env.PORT;
}

initServer(port);
