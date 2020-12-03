import { RequestHandler, Request, Response } from "express";
import { Bread } from "../bread.class";

type Params = {};
type Query = {};
type Body = {
  name: string;
  icon: string;
};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const hanlder: RequestHandler[] = [
  async (req: Req, res: Res) => {
    // Create bread
    const bread: Bread = new Bread();
    bread.name = req.body.name;
    bread.icon = req.body.icon;
    // Save bread
    await bread.save();
    // Emit bread
    res.json(bread.values);
  }
];
