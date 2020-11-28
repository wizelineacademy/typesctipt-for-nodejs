import { Request, Response } from "express";

import {
  getCake as cakeGetter,
  getCakes as cakesGetter,
} from "../cakes.service";

export function getCakes(req: Request, res: Response) {
  let cakes = cakesGetter();
  res.json(cakes).end();
}
export function getCake(req: Request, res: Response) {
  console.log("Params:", req.params);
  let cake = cakeGetter(+req.params["id"]);
  res.json(cake).end();
}
