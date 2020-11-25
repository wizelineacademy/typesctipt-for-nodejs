import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import App from './app/app.server';

// import PostsController from './controllers/posts/PostsController';
dotenv.config();

const app = new App({
  port: process.env.SERVER_PORT,
  controllers: [
    // new PostsController(),
  ],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    morgan('dev'),
  ],
});

app.listen();
