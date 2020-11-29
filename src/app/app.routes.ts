import { Route } from "./shared";

import { healthHandler, homeHandler } from "./app.controllers";

export let appRoutes: Route[] = [
  {
    name: "Home",
    method: "GET",
    path: "/",
    handler: homeHandler,
    isProtected: false,
  },
  {
    name: "Health",
    method: "GET",
    path: "/health",
    handler: healthHandler,
    isProtected: false,
  },
];
