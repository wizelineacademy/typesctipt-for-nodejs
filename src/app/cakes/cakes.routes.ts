import { Route } from "../shared";
import { getCakes, createCake, updateCake, getCake } from "./handlers";

export let cakeRoutes: Route[] = [
  {
    name: "Create cake",
    method: "POST",
    path: "/",
    handler: createCake,
    isProtected: true,
  },
  {
    name: "Update cake",
    method: "PUT",
    path: "/:id",
    handler: updateCake,
    isProtected: true,
  },
  {
    name: "Get cake",
    method: "GET",
    path: "/:id",
    handler: getCake,
    isProtected: true,
  },
  {
    name: "Get all cakes",
    method: "GET",
    path: "/",
    handler: getCakes,
    isProtected: true,
  },
];
