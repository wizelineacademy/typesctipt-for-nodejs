import { Router } from 'express';
import { handler as getHandler } from './handlers/get.handler';
import { handler as posttHandler } from './handlers/post.handler';

export const router = Router();

router.route('/').get(getHandler).post(posttHandler);
