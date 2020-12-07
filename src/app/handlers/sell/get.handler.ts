import { RequestHandler, Request, Response } from 'express';
import { SellService } from './../../sell/sell.service';
import { CakeService } from './../../cake/cake.service';
import { dbConn } from '../../app.database';

type Params = {};
type Query = {};
type Body = {};

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
  async (req: Req, res: Res, next) => {
    try {
      const sellService = new SellService(dbConn);
      const cakeService = new CakeService(dbConn);
      const id: string = req.body.id;
      let sell;
      let cake;
      if (id) {
        sell = await sellService.getById(id);
      } else {
        sell = await sellService.fetchAll();
      }

      res.status(200).json({
        data: sell,
      });
    } catch (err) {
      next(err);
    }
  },
];
