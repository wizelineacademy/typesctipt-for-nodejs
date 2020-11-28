import { Router } from 'express';
import { handler as getHandler } from './handlers/get.handler';
import { handler as postHandler } from './handlers/post.handler';
import { handler as putHandler } from './handlers/put.handler';
import { handler as nameGetHandler } from './handlers/name.get.handler';

export const router: Router = Router();

router.route('/').get(getHandler).post(postHandler).put(putHandler);

router.route('/:name').get(nameGetHandler);
