import { RequestHandler, Request, Response } from 'express';
import { getCake } from '../cake.service';

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    const cake = await getCake(req.params.name);
    res.json(cake);
  }
];
