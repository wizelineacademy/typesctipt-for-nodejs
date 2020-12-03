import { RequestHandler, Request, Response } from "express";
import { dbMain } from "../../app.database";
import { BreadService } from "../bread.service";

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const hanlder: RequestHandler[] = [
  async (req: Req, res: Res) => {
    const breadService = new BreadService(dbMain);
    const breads = breadService.getMany();
    res.json(breads);
  }
];
