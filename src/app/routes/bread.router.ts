import { Router } from 'express';

export const router: Router = Router();

router.route('/').get((_, res) => {
  res.json('Hello from bread router');
});
