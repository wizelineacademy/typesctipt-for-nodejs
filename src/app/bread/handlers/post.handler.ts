import { RequestHandler } from 'express';
import { Req, Res } from '@customTypes';
import { makeBread } from '../bread.service';

export const handler: RequestHandler[] = [
  // Middlewares
  async (_: Req, res: Res) => {
    const bread = await makeBread(10);
    res.json(bread);
  },
];
