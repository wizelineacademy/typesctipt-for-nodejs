import { Router } from "express";
import { createHandler } from "./handlers/post.handler";
import { getHandler } from "./handlers/get.handler";


export const router: Router = Router();

router.route('/:saleId').get(getHandler);
router.route('/').post(createHandler);
