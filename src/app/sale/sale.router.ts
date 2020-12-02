import { Router } from 'express';

import { handler as postHandler } from './handlers/post.handler';
import { handler as getsHandler } from './handlers/gets.handler';

const router: Router = Router();

router
    .route('/')
    .get(getsHandler)
    .post(postHandler);

export default router;