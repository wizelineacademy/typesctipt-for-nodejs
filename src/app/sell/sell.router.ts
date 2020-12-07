import { Router } from 'express';
import { handler as getHandler } from './../handlers/sell/get.handler';
import { handler as postHandler } from './../handlers/sell/post.handler';

const router: Router = Router();

router.route('/sales').get(getHandler).post(postHandler);

export { router };
