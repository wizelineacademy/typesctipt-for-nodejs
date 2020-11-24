import express, { Express, Router } from "express";
import { router as breadRouter } from "./bread/bread.router";

const app: Express = express();
const router: Router = Router();

app.use(router);
router.use(breadRouter);

export let initServer = (port: number) => {
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};
