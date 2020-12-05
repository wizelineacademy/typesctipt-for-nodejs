import { Router } from 'express';
import { handler as getHandler } from './handlers/get.handler';
import { handler as postHandler } from './handlers/post.handler';
import { handler as updateHandler } from './handlers/update.handler';

export const router = Router();

router.route('/').get(getHandler).post(postHandler);

router.route('/:id').get(getHandler[1]).put(updateHandler);
