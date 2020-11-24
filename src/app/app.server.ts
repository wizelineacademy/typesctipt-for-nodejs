import dotenv from 'dotenv';
import express, { Express } from 'express';

dotenv.config({
  path: '.env'
});

const app: Express = express();

export function initServer() {
  const port: string = process.env.APP_PORT || '3000';
  app.listen(port, function() {
    console.log(`App listening on port ${port}`);
  });
}