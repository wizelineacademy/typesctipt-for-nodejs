import { Router } from "express"
import { indexGetHandler, idGetHandler } from "./handlers/get.handler"
import { idPatchHandler } from "./handlers/patch.handler"

export const router: Router = Router()

router.route('/').get(indexGetHandler)

router.route("/:id").get(idGetHandler)