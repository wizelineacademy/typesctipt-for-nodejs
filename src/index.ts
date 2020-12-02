import { initServer } from './app/app.server';
import * as dotenv from "dotenv";
import { connect } from './app/app.database';

dotenv.config();

let port: number = 3000;

if(process.env.PORT!==undefined){
    port = +process.env.PORT;
}

connect();
initServer(port);
