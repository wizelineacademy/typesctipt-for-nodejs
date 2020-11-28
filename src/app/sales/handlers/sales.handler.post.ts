import { Request, Response } from "express";
import { CakeBuilder } from "../../cakes/cakes.builder";
import { Cake } from "../../cakes/cakes.class";
import { Sell } from "../sales.class";
import { registerSell } from "../sales.service";

export function sellCake(req: Request, res: Response) {
  let body = req.body;

  let cakeID: number = +body["cakeID"];
  let cake: Cake = new CakeBuilder().build(); //TODO: Retrieve this cake from the DB

  let sell: Sell = new Sell(
    body["customerName"],
    body["customerPhoneNumber"],
    body["customerEmail"],
    Number(body["totalAmout"]),
    cake
  );
  if (!sell.isValid()) {
    res.status(400).end();
    return;
  }

  let result = registerSell(sell);
  result
    .then(() => res.status(200).end())
    .catch(() => {
      res.status(400).write("No enought stock");
      res.end();
    });
}
