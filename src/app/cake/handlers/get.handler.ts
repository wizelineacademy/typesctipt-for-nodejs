import { RequestHandler, Request, Response } from 'express';
import { CakeService } from '../cake.service';

export const handler: RequestHandler[] = [
  async (_: Request, res: Response) => {
    const cakeService = new CakeService();
    const cakes = await cakeService.getCakes();
    res.json(cakes);
  }
];
