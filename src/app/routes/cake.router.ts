import { Router, Response } from 'express';

export const router = Router();

router.route('/').get((_, res: Response) => {
  res.json('Hey from cake');
});
