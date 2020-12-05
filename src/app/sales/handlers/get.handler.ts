import { Req, Res } from '../../types/index';
import { RequestHandler } from 'express';

export const handler: RequestHandler[] = [
  (req: Req, res: Res) => {
    res.json('Sales get handler');
  },
];
