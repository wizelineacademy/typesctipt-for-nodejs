import { RequestHandler, Request, Response } from 'express';
import { makeCake } from './../../cake/cake.service';

type Params = {};
type Query = {};
type Body = {};

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
  async (req: Req, res: Res, next) => {
    try {
      const cake = await makeCake();
      res.status(200).json({
        data: cake,
      });
    } catch (err) {
      next(err);
    }
  },
];
