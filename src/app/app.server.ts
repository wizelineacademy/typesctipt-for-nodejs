import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import path from 'path';
import { router as appRouter } from './app.router';

const app: Express = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', appRouter);

export function startServer(port: number) {
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}
