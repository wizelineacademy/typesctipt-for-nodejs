import { Request, Response } from "express";
import { CakeBuilder } from "../cakes.builder";
import { saveCake } from "../cakes.service";

export function createCake(req: Request, res: Response) {
  let body = req.body;

  let cake = new CakeBuilder()
    .name(body["name"])
    .description(body["description"])
    .ingredients(body["ingredients"])
    .price(body["price"])
    .stock(body["stock"])
    .build();

  if (!cake.isValid()) {
    res.status(400).end();
    return;
  }

  let result = saveCake(cake);

  if (result) {
    res.status(200).json(cake);
  } else {
    res.status(500).write("Cannot process request");
  }

  res.end();
}
