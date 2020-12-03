// Post handler
// Single Responsibility File, for handling requests
import { RequestHandler, Request, Response } from 'express';
import { SaleService } from '../sale.service';
import { ISale } from '../sale.interface';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

// request handler functions array that express allows us to pass to it
// middlewares goes here like validation and loggers
export const handler: RequestHandler[] = [
  // auth,
  // logger,
  async (req: Req, res: Res) => {
    try {
      // console.log('req.body', req.body);
      const newSale = req.body as ISale;
      const saleService: SaleService = new SaleService();
      const saleId: string = await saleService.createSale(newSale);
      res.json({ success: true, sale: saleId });
    } catch (error) {
      console.log('(Post-handler)Error on saving a sale: ', error.message);
      res.status(500).json({
        success: false,
        errorMessage: 'Something wen wrong trying to create the sale...',
      });
    }
  },
];
