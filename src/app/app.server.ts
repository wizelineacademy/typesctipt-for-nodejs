import express, { Express, Router } from "express";

import { router as BreadRouter } from "./bread/bread.router";

const app: Express = express();

const router: Router = Router();

app.use("/breads", BreadRouter);
app.use(router);

export function initServer(port: number) {
  app.listen(port, () => {
    console.log("Server listen on port", port);
  });
}
