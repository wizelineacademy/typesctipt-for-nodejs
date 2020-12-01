import { initServer } from './app/app.server';
import dotenv from 'dotenv';
dotenv.config();

const port: number = +process.env.PORT || 3000;
initServer(port);