import { initServer } from './app/app.server';

const port: number = +process.env.PORT || 3000;
initServer(port);
