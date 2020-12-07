import { RequestHandler } from 'express';
import { Req, Res } from '../../types/index';
import { ICake } from '../../models/index';
import { Cake } from '../cake.class';
import { cakeInjection } from '../../app.di';
import { errorWrap } from '../../../components/error.component';

export const handler: RequestHandler[] = [
  // Middlewares
  errorWrap(async (req: Req, res: Res) => {
    const cake = new Cake(cakeInjection);
    const id = req.params['id'];
    const payload = req.body as ICake;
    cake.name = payload.name;
    cake.price = payload.price;
    cake.status = payload.status;
    cake.stock = payload.stock;
    cake.status = payload.status;
    cake.description = payload.description;
    cake.ingredients = payload.ingredients;
    const cakeId = await cake.updateCake(id);
    res.json({ message: 'Cake updated', cakeId });
  }),
];
