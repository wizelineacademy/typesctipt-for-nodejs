import * as dotenv from 'dotenv';
import  App  from './app/app.server';
import CackeController from './app/cacke/cacke.router';

dotenv.config();

const app = new App(
    process.env.SERVER_PORT, //port
    [new CackeController()]  //controllers
);

app.listen();
