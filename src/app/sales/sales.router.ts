import { Router } from "express";

import { salesRoutes } from "./sales.routes";

export let router: Router = Router();

export function addRoutes() {
  for (let index = 0; index < salesRoutes.length; index++) {
    const route = salesRoutes[index];
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
