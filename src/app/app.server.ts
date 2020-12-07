import express, {
  Express,
  Router,
  Request,
  Response,
  NextFunction,
  json,
} from 'express';
import { router as cakeRouter } from './cake/cake.router';
import { router as salesRouter } from './sales/sales.router';
import { errorHandler } from '../components/error.component';

const app: Express = express();

const router: Router = Router();

router.use(json());

router.use('/cakes', cakeRouter);
router.use('/sales', salesRouter);

app.use(router);

app.use((error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(error, res);
});

export const initServer = (port: number) => {
  app.listen(port, () => {
    console.log('Server started in port', port);
  });
};
