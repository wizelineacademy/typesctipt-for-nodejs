import express, { Express, Router } from "express";

import { router, addAllRoutes } from "./app.router";

const app: Express = express();

export function initServer(port: number) {
  app.use(express.json());
  addAllRoutes(app);
  app.listen(port, function () {
    console.log("Server listen on port", port);
  });
}
