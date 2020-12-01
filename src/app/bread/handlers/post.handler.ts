import { RequestHandler, Request, Response } from "express";
import { makeBread } from "../bread.service";

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const hanlder: RequestHandler[] = [
  // saveRequest('post breads'),
  async (req: Req, res: Res) => {
    const bread = await makeBread(1);
    res.json(bread);
  }
];
