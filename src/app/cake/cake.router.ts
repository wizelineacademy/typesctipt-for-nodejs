import express, {Router} from 'express';
import {handler as getHandler} from './handlers/get.handler'
import {handler as postHandler} from './handlers/post.handler'
import {handler as putHandler} from './handlers/put.handler'
import {handler as deleteHandler} from './handlers/delete.handler'

export const router: Router = express.Router()

router.route('/')
	.get(getHandler)
	.post(postHandler)


router.route('/:id')
	.put(putHandler)
	.delete(deleteHandler)