import express, { Express, Router } from 'express';

const app: Express = express();

app.get( "/", ( req, res ) => {
    res.send("1,2,3 probando!");
} );

export function initServer(port: number) {
  app.listen(port, () =>  {
    // tslint:disable-next-line:no-console
    console.log('Server listen on port ', port)
  })
}
