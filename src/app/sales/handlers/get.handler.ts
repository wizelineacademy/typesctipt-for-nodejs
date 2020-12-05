import { Req, Res } from '../../types/index';
import { RequestHandler } from 'express';
import { SalesService } from '../sales.service';
import { dbMain } from '../../app.database';

export const handler: RequestHandler[] = [
  async (req: Req, res: Res) => {
    const service = new SalesService(dbMain);
    const sales = await service.fetchAll();
    res.json(sales);
  },
];
