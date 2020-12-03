// Get handler
import { RequestHandler, Request, Response } from 'express';
import { ISale } from '../../sale/sale.interface';
import { SaleService } from '../sale.service';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

// request handler functions array that express allows us to pass to it
// middlewares goes here like validation and loggers
export const handler: RequestHandler[] = [
  async (req: Req, res: Res) => {
    try {
      const saleId: string = req.params['saleId'];
      const saleService: SaleService = new SaleService();
      const sale: ISale = await saleService.getSale(saleId);
      res.json(sale);
    } catch (error) {
      console.log('error on getOneSale', error.message);
      res.json({ errorMessage: 'Something went wrong!' });
    }
  },
];
