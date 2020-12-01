import { RequestHandler, Request, Response } from 'express';
import { updateCake } from '../cake.service';
import { Status } from '../cake.model';

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    const cake = await updateCake({
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients.split(','),
      price: +req.body.price,
      quantity: +req.body.quantity,
      status: req.body.status as Status
    });
    res.json(cake);
  }
];
