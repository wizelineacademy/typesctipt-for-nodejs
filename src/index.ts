import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import App from './app/app.server';

dotenv.config();

const app = new App({
  port: process.env.SERVER_PORT,
  controllers: [
  ],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    morgan('dev'),
  ],
});

app.listen();
