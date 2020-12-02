import { Request, Response } from "express";
import { Cake } from "../cakes.class";
import { CakeService } from "../cakes.service";

export function getCakes(req: Request, res: Response) {
  const cakeService = new CakeService();
  let promise = cakeService.getCakes();
  promise.then((cakes: Cake[]) => {
    res.json(cakes).end();
  });
}
export function getCake(req: Request, res: Response) {
  const cakeService = new CakeService();
  let promise = cakeService.getCake(req.params["id"]);
  promise.then((cake: Cake) => {
    res.json(cake).end();
  });
}
