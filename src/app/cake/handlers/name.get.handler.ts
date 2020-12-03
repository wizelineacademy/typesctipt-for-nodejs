import { RequestHandler, Request, Response } from 'express';
import { CakeService } from '../cake.service';

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    const cakeService = new CakeService();
    const cake = await cakeService.getCake(req.params.name);
    res.json(cake);
  }
];
