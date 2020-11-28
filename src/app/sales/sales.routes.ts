import { Route } from "../shared";
import { sellCake } from "./handlers";

export let salesRoutes: Route[] = [
  {
    name: "Sell cake",
    method: "POST",
    path: "/",
    handler: sellCake,
    isProtected: true,
  },
];
