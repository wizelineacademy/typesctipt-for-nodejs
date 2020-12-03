import { RequestHandler } from 'express';
import { Req, Res } from '@customTypes';
import { ICake } from '@models';
import { Cake } from '../cake.class';
import { cakeInjection } from '../../app.di';

export const handler: RequestHandler[] = [
  // Middlewares
  async (req: Req, res: Res) => {
    const cake = new Cake(cakeInjection);
    const payload = req.body as ICake;
    cake.name = payload.name;
    cake.price = payload.price;
    cake.status = payload.status;
    cake.stock = payload.stock;
    cake.status = payload.status;
    cake.description = payload.description;
    cake.ingredients = payload.ingredients;
    const cakeId = await cake.makeCake();
    res.json({ message: 'Cake created', cakeId });
  },
];
