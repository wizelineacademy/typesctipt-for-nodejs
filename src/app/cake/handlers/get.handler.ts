import { Req, Res } from '@customTypes';
import { RequestHandler } from 'express';

export const handler: RequestHandler[] = [
  (_: Req, res: Res) => {
    res.json('Cake get handler');
  },
];
