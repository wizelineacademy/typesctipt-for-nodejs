import { RequestHandler } from 'express';
import { Req, Res } from '@customTypes';
import { getBread } from '../bread.service';

export const handler: RequestHandler[] = [
  // Middlewares
  (_: Req, res: Res) => {
    const bread = getBread();
    res.json(bread);
  },
];
