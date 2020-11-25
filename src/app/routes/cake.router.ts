import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/cake', (req: Request, res: Response) => {
  res.send('Start my cake router');
});

router.get('/', (req: Request, res: Response) => {
  res.send('Hi');
});

export { router };