import { RequestHandler, Request, Response } from 'express';
import { getCakes } from '../cake.service';

export const handler: RequestHandler[] = [
  async (_: Request, res: Response) => {
    const cakes = await getCakes();
    res.json(cakes);
  }
];
