require('dotenv').config();
import { initServer } from './app/app.server';

const port: number = Number(process.env.PORT);

initServer(port);
