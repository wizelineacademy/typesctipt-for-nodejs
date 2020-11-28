import { Router } from "express";
import { getAllHandler, getHandler } from "./handlers/get.handler";
import { createHandler } from "./handlers/post.handler";
import { updateHandler } from "./handlers/put.handler";

export const router: Router = Router();

router.route('/').get(getAllHandler);
router.route('/').post(createHandler);
router.route('/:cakeId').get(getHandler);
router.route('/:cakeId').put(updateHandler);
