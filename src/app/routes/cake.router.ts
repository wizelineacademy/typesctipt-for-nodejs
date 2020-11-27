import { Router } from 'express';
import { handler as getHandler } from './../handlers/cake/get.handler';
import { handler as postHandler } from './../handlers/cake/post.handler';

const router: Router = Router();

router.route('/cake').get(getHandler).post(postHandler);

export { router };
