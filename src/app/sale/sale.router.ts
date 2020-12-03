import { Router } from 'express';
import { handler as getHandler } from './handlers/get.handler';
import { handler as getOneHandler } from './handlers/getOne.handler';
import { handler as postHandler } from './handlers/post.handler';
import { handler as patchHandler } from './handlers/patch.handler';

export const router: Router = Router();

router.route('/').get(getHandler).post(postHandler);
router.route('/:saleId').get(getOneHandler).patch(patchHandler);
