import { Router } from "express";
import { handler as getHandler } from "./handlers/get.handler"
import { handler as postHandler } from "./handlers/post.handler"
import { handler as patchHandler } from "./handlers/patch.handler"
import { handler as deleteHandler } from "./handlers/delete.handler"

export const router: Router = Router()


router.route('/')
    .get(getHandler)
    .post(postHandler)

router.route('/:id')
    .patch(patchHandler)
    .delete(deleteHandler)