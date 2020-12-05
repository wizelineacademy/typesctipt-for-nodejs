import { RequestHandler, Request, Response } from "express";
import { update } from '../cake.service';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
  // auth
  async (req: Req, res: Res) => {
    console.log('Handling PUT...');
    const updated = await update();
    res.json(updated);
  }
];