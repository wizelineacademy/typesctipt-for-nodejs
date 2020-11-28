import { RequestHandler, Request, Response } from 'express';
import { CakeInterface } from '../../cake/cake.model';
import { SaleInterface } from '../../sale/sale.model';
import { insertSale } from '../sale.service';

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    const saleIntent: SaleInterface = {
      customerName: req.body.customerName,
      customerPhoneNumber: req.body.customerPhoneNumber,
      customerEmail: req.body.customerEmail,
      totalAmount: +req.body.totalAmount,
      cake: req.body.cake as CakeInterface
    };
    const sale = await insertSale(saleIntent);
    res.json(sale);
  }
];
