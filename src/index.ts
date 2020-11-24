import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import express, {Express} from 'express';
import path from 'path';
import {router as indexRouter} from './routes/index';

dotenv.config();

const app: Express = express();

app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const port: number = parseInt(process.env.SERVER_PORT || '3000', 10);
app.listen( port, () => {
  console.log(`server started at http://localhost:${port}`);
} );
