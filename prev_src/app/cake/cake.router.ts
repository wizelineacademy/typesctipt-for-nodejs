import { Router } from 'express';

import { handler as getsHandler } from './handlers/gets.handler';
import { handler as postHandler } from './handlers/post.handler';
import { handler as getHandler } from './handlers/get.handler';
import { handler as putHandler } from './handlers/put.handler';

const router: Router = Router();

router
    .route('/')
    .get(getsHandler)
    .post(postHandler);

router
    .route('/:id')
    .get(getHandler)
    .put(putHandler);

export default router;
