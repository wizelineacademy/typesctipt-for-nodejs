import { RequestHandler, Request, Response } from 'express';
import { CakeService } from '../cake.service';
import { ICake } from '../cake.interface';
import { Status } from '../status.enum';

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    const cakeService = new CakeService();
    const cake = await cakeService.updateCake({
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients.split(','),
      price: +req.body.price,
      quantity: +req.body.quantity,
      status: req.body.status as Status
    } as ICake);
    res.json(cake);
  }
];
