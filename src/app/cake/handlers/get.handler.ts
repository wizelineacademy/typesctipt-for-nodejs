import { Req, Res } from '@customTypes';
import { RequestHandler } from 'express';
import { CakeService } from '../cake.service';
import { dbMain } from '../../app.database';

export const handler: RequestHandler[] = [
  async (req: Req, res: Res) => {
    const service = new CakeService(dbMain);
    const cakes = await service.getMany();
    res.json(cakes);
  },
];
