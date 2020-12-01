import { RequestHandler, Request, Response } from 'express';
import { SellService } from './../../sell/sell.service';
import { dbConn } from '../../app.database';

type Params = {};
type Query = {};
type Body = {};

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
  async (req: Req, res: Res, next) => {
    try {
      const id: string = req.params.id;
      const sellService = new SellService(dbConn);
      const sell = await sellService.getById(id);
      res.status(200).json({
        data: sell,
      });
    } catch (err) {
      next(err);
    }
  },
];
