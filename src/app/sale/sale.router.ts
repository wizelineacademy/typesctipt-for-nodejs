import { Router } from 'express';
import { handler as postHandler } from './handlers/post.handler';

export const router: Router = Router();

// Register new Sale
router.route('/').post(postHandler);
