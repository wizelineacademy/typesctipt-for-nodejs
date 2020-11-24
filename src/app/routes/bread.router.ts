import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/bread', (req: Request, res: Response) => {
  res.send('Bread router');
});

router.get('/', (req: Request, res: Response) => {
  res.send('Hi');
});

export { router };