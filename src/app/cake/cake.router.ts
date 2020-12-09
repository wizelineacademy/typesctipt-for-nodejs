import { Router } from 'express';

import { handler as getHandler } from './handlers/get.handler';
import { handler as putHandler } from './handlers/put.handler';
import { handler as getsHandler } from './handlers/gets.handler';
import { handler as postHandler } from './handlers/post.handler';

export const router: Router = Router();

router
    .route('/:id')
    .get(getHandler)
    .put(putHandler);

router
    .route('/')
    .get(getsHandler)
    .post(postHandler);