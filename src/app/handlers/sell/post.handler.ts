import { RequestHandler, Request, Response } from 'express';
import { SellService } from './../../sell/sell.service';
import { Sell } from './../../sell/sell.class';
import { dbConn } from '../../app.database';
import { iSell } from '../../sell/sell.interface';
import { CakeService } from './../../cake/cake.service';
import { iCake } from '../../cake/cake.interface';

type Params = {};
type Query = {};
type Body = {};

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
  async (req: Req, res: Res, next) => {
    try {
      const cakeService = new CakeService(dbConn);
      const sellService = new SellService(dbConn);
      const data: iSell = req.body as iSell;

      if (req.body.cake.id) {
        const id = req.body.cake.id;
        const cake = await cakeService.getById(id);
        data.cake = cake as iCake;
        const sell = new Sell(data);

        const error = sell.validate();

        if (error.length > 0) {
          res.status(400).json({
            error: error,
          });
          return;
        }

        sell.updateStock();
        const soldData = sell.sell;
        const sold = await sellService.insert(soldData);
        res.status(200).json({
          data: sold,
        });
      } else if (req.body.year && req.body.week) {
        const sales = await sellService.fetchByYearWeek(
          +req.body.year,
          +req.body.week
        );

        res.status(200).json({
          data: sales,
        });
      } else {
        res.status(400).json({
          error: 'The cake is required',
        });
        return;
      }
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  },
];
