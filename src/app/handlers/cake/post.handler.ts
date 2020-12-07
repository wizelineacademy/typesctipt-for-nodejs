import { RequestHandler, Request, Response } from 'express';
import { CakeService } from './../../cake/cake.service';
import { Cake } from './../../cake/cake.class';
import { dbConn } from '../../app.database';
import { iCake } from '../../cake/cake.interface';

type Params = {};
type Query = {};
type Body = {};

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
  async (req: Req, res: Res, next) => {
    try {
      let data;
      const cakeValidate = new Cake(req.body as iCake);
      const error = cakeValidate.validate();

      if (error.length > 0) {
        res.status(400).json({
          error: error,
        });
        return;
      }

      const cakeService = new CakeService(dbConn);
      if (req.body.id) {
        const id = req.body.id;
        data = await cakeService.updateById(id, cakeValidate.cake);
      } else {
        data = await cakeService.insert(cakeValidate.cake);
      }

      res.status(200).json({
        data: data,
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  },
];
