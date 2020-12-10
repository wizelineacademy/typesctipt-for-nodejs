import dotenv from 'dotenv';
import  App  from './app/app.server';
import { router as cackeRouter } from './app/cacke/cacke.router';
import { router as sellRouter } from './app/sell/sell.router';

dotenv.config();

const app = App.getInstance (
                process.env.SERVER_PORT, 
                [
                    cackeRouter, 
                    sellRouter
                ] 
            );

app.listen();
