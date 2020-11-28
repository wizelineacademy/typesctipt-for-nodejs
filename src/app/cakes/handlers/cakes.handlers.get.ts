import { Request, Response } from "express";
import { Cake } from "../cakes.class";

import {
  getCake as cakeGetter,
  getCakes as cakesGetter,
} from "../cakes.service";

export function getCakes(req: Request, res: Response) {
  let promise = cakesGetter();
  promise.then((cakes: Cake[]) => {
    res.json(cakes).end();
  });
}
export function getCake(req: Request, res: Response) {
  let promise = cakeGetter(+req.params["id"]);
  promise.then((cake: Cake) => {
    res.json(cake).end();
  });
}
