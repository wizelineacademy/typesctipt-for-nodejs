import { Router } from 'express';

const router: Router = Router();

router
    .route('/');

router
    .route('/:id');

export default router;