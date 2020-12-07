import { RequestHandler, Request, Response } from 'express';
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
      let cake;
      const cakeService = new CakeService(dbConn);
      if (req.body.id) {
        const id = req.body.id;
        cake = await cakeService.getById(id);
      } else {
        cake = await cakeService.fetchAll();
      }

      res.status(200).json({
        data: cake,
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  },
];
