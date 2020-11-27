import express, { Express, Router } from "express";
import { router as cakeRouter } from "./cake/cake.router";

const app: Express = express();
const router: Router = Router();

app.use(router);
router.use(cakeRouter);

export let initServer = (port: number) => {
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};
