import { Router } from 'express';
import { handler as getHandler } from './handlers/get.handler'

export const router= Router();

router.route('/').get(getHandler)
