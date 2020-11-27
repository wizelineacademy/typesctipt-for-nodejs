import { RequestHandler, Request, Response } from 'express';
import { getCake } from '../../services/cake.service';

type Params = {};
type Query = {};
type Body = {};

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
  async (req: Req, res: Res, next) => {
    try {
      const cake = await getCake();
      res.status(200).json({
        data: cake,
      });
    } catch (err) {
      next(err);
    }
  },
];
