import { initServer } from './app/app';
import * as dotenv from "dotenv";

dotenv.config();
const port: number = +process.env.PORT || 3000; 

initServer(port);