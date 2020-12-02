import { Router } from "express";

import { cakeRoutes } from "./cakes.routes";

export let router: Router = Router();

export function addRoutes() {
  for (let index = 0; index < cakeRoutes.length; index++) {
    const route = cakeRoutes[index];
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
