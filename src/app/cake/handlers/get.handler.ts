import { Req, Res } from '../../types/index';
import { RequestHandler } from 'express';
import { CakeService } from '../cake.service';
import { dbMain } from '../../app.database';
import { errorWrap } from '../../../components/error.component';

export const handler: RequestHandler[] = [
  errorWrap(async (req: Req, res: Res) => {
    const service = new CakeService(dbMain);
    const cakes = await service.getMany();
    res.json(cakes);
  }),
  errorWrap(async (req: Req, res: Res) => {
    const id = req.params['id'];
    const service = new CakeService(dbMain);
    const cake = await service.getById(id);
    res.json(cake);
  }),
];
