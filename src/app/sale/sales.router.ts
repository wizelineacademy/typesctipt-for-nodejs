import { Router } from 'express';
import { handler as getHandler } from './handlers/get.handler';
import { handler as postHandler } from './handlers/post.handler';

export const router: Router = Router();

router.route('/').get(getHandler).post(postHandler);
