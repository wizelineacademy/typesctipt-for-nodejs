import { RequestHandler, Request, Response } from "express";
import { getBread } from "../bread.service";

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const hanlder: RequestHandler[] = [
  // auth,
  async (req: Req, res: Res) => {
    const bread = await getBread();
    res.json(bread);
  }
];
