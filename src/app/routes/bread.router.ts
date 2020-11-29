import { Router, Response } from 'express';

export const router: Router = Router();

router.route('/').get((_, res: Response) => {
  res.json('Hello from bread router');
});
