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
      const id: string = req.params.id;
      const cakeService = new CakeService(dbConn);
      const cake = await cakeService.getById(id);
      res.status(200).json({
        data: cake,
      });
    } catch (err) {
      next(err);
    }
  },
];
