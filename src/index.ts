import dotenv from 'dotenv';
import { startServer } from './app/app.server';

dotenv.config();

const DEFAULT_SERVER_PORT: number = 3000;

const port: number = parseInt(
  process.env.SERVER_PORT || `${DEFAULT_SERVER_PORT}`,
  10
);
startServer(port);
