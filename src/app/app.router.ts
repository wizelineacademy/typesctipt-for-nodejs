import { Express, Router } from "express";

import { router as cakesRouter, addRoutes as addCakesRoutes } from "./cakes";
import { router as salesRouter, addRoutes as addSalesRoutes } from "./sales";
import { appRoutes } from "./app.routes";

export const router: Router = Router();

export function addAllRoutes(app: Express) {
  addAppRoutes();
  app.use("/", router);
  addCakesRoutes();
  app.use("/cakes", cakesRouter);
  addSalesRoutes();
  app.use("/sales", salesRouter);
}

export function addAppRoutes() {
  for (let index = 0; index < appRoutes.length; index++) {
    const route = appRoutes[index];
    if (route.isProtected) {
      route.handler = route.handler; //TODO: Add auth middleware here
    }
    switch (route.method) {
      case "GET":
        router.get(route.path, route.handler);
        break;
      case "POST":
        router.post(route.path, route.handler);
        break;
      case "PUT":
        router.put(route.path, route.handler);
        break;
      case "DELETE":
        router.delete(route.path, route.handler);
        break;
    }
  }
}
