import { Router } from 'express';
import { deleteHandler } from './handlers/delete.handler';
import { getHandler } from './handlers/get.handler';
import { getOneHandler } from './handlers/getOne.handler';
import { patchHandler } from './handlers/patch.handler';
import { postHandler } from './handlers/post.handler';

/**
 * routes defined for Cakes
 */
const router: Router = Router();

// GET
router.route('/')
    .get(getHandler)
    .post(postHandler);

router.route('/:id')
    .get(getOneHandler)
    .patch(patchHandler)
    .delete(deleteHandler);

export default router;
