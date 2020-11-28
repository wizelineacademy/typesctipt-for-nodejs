import { Router } from 'express';
import { handlerAll as getAll, handlerById as getById } from './handlers/get.handler';
import { handler as postHandler } from './handlers/post.handler';
import { handler as putHandler} from './handlers/put.handler';

export const router: Router = Router();

// List all Cakes
router.route('/').get(getAll);

// Cake Detail
router.route('/:id').get(getById);

// Register new Cake
router.route('/').post(postHandler);

// Edit a Cake
router.route('/:id').put(putHandler);
