import { RequestHandler, Request, Response } from 'express';
import { SaleService } from '../sale.service';

export const handler: RequestHandler[] = [
  async (_: Request, res: Response) => {
    const saleService = new SaleService();
    const sales = await saleService.getSales();
    res.json(sales);
  }
];
