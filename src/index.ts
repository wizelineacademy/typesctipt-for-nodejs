import { initServer } from './app/app.server';
const port: string = process.env.APP_PORT || '3000';
initServer(port);
