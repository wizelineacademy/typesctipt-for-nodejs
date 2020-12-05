// Post handler
// Single Responsibility File, for handling requests
import { RequestHandler, Request, Response } from 'express';
// import { SaleService } from '../sale.service';
import { SaleRequest } from '../sale.types';
import { Sale } from '../sale.class';
import { CakeService } from '../../cake/cake.service';
import { ICake } from '../../cake/cake.interface';
import { Status as CakeStatus } from '../../cake/cake.enums';

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
      // Services
      const cakeService: CakeService = new CakeService();
      // const saleService: SaleService = new SaleService();
      // Looking for catalog cake
      const cakeId: string = req.body['cakeId'];
      const catalogCake: ICake = await cakeService.getCake(cakeId);
      // trying to create the sale
      const saleRequest = req.body as SaleRequest;
      const newSale: Sale = new Sale();

      console.log('[catalogCake]', catalogCake);
      console.log('[saleRequest]', saleRequest);
      const saleId = await newSale.save(catalogCake, saleRequest);
      // const saleId: string = await saleService.createSale(newSale);

      // Update catalog cake's stock
      catalogCake.stock = catalogCake.stock - saleRequest.quantity;
      catalogCake.status =
        catalogCake.stock == 0
          ? CakeStatus.OutOfStock
          : catalogCake.stock <= 10
          ? CakeStatus.LastUnits
          : CakeStatus.Available;

      const updatedCake = await cakeService.editCake(cakeId, catalogCake);
      // TO DO: Update Cake Status & move this logic to a class...
      res.json({
        success: true,
        sale: saleId,
        cakeStock: updatedCake.stock,
        cakeStatus: updatedCake.status,
      });
    } catch (error) {
      console.log('(Post-handler) Error on saving a sale: ', error.message);
      res.status(500).json({
        success: false,
        errorMessage: error.message,
        // errorMessage: 'Something wen wrong trying to create the sale...',
      });
    }
  },
];
