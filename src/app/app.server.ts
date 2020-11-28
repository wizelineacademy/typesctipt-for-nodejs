import dotenv from 'dotenv';
import express, { Express } from 'express';

dotenv.config({
  path: '.env'
});

const app: Express = express();

export function initServer(port: string) {
  app.listen(port, function() {
    console.log(`App listening on port ${port}`);
  });
}