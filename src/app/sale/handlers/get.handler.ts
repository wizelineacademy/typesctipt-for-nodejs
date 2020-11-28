import { RequestHandler, Request, Response } from 'express';
import { getSales } from '../sale.service';

export const handler: RequestHandler[] = [
  async (_: Request, res: Response) => {
    const sales = await getSales();
    res.json(sales);
  }
];
