import express, {Router} from 'express';
import {handler as getHandler} from './handlers/get.handler'
import {handler as postHandler} from './handlers/post.handler'

export const router: Router = express.Router()

router.route('/')
	.get(getHandler)
	.post(postHandler)
