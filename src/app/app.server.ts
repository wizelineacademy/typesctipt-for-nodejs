import express, { Express } from 'express';

// Explicit var type on declaration BP/GI (Best Practise/Gute Idee)
const app: Express = express();

// HTTP Server factory function
export function initServer(port: number) {
  app.listen(port, () => {
    console.log('HTTP Server listening on port: ', port);
  });
}
