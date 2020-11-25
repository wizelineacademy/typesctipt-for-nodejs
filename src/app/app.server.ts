import express, { Express } from "express";
import { router as AppRouter } from "./app.router";
import { router as CupcakeRouter } from "./cupcake/cupcake.router";

const app: Express = express();

app.use('/', AppRouter);
app.use('/cupcake', CupcakeRouter);

const server = `Creepy Cupcakes' HTTP Server`;

export const initServer = (port: number) => {
  app.listen(port, () => {
    console.log(`${server} now running on port ${port}`);
  })
}
