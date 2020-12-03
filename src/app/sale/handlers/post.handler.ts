import { RequestHandler, Request, Response } from 'express';
import { ICake } from '../../cake/cake.interface';
import { ISale } from '../sale.interface';
import { SaleService } from '../sale.service';

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    const saleIntent: ISale = {
      customerName: req.body.customerName,
      customerPhoneNumber: req.body.customerPhoneNumber,
      customerEmail: req.body.customerEmail,
      totalAmount: +req.body.totalAmount,
      cake: req.body.cake as ICake
    } as ISale;
    const saleService = new SaleService();
    const sale = await saleService.insertSale(saleIntent);
    res.json(sale);
  }
];
