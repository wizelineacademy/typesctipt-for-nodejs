import { Req, Res } from '@customTypes';
import { RequestHandler } from 'express';
import { getCakes } from '../cake.service';

export const handler: RequestHandler[] = [
  async (_: Req, res: Res) => {
    const cake = await getCakes();
    res.json(cake);
  },
];
