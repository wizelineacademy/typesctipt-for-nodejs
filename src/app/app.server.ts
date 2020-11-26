import express, { Express } from "express";
import helmet from "helmet";
import { router as appRouter } from "./app.router";
import { router as cupcakeRouter } from "./cupcake/cupcake.router";

const app: Express = express();
app.use(helmet.hidePoweredBy());

app.use('/', appRouter);
app.use('/cupcake', cupcakeRouter);

const server = `Creepy Cupcakes' HTTP Server`;

export const initServer = (port: number) => {
  app.listen(port, () => {
    console.log(`${server} now running on port ${port}`);
  })
}
