import { RequestHandler } from 'express';
import { Req, Res } from '../../types/index';

export const handler: RequestHandler[] = [
  // Middlewares
  async (req: Req, res: Res) => {
    res.json('Sales post handler');
  },
];
