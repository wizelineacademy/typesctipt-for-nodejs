import { Router } from 'express';

import { handler as postHandler } from './handlers/post.handler';

const router: Router = Router();

router
    .route('/')
    .get()
    .post(postHandler);

export default router;