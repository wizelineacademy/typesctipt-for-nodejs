import { initServer } from './app/app.server';
import { resolve } from "path"
import { config } from 'dotenv';

config({ path: resolve(__dirname, "../.env") });

const port: number = +process.env.PORT;

initServer(port);

