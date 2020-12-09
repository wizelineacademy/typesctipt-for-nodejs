import { Router } from "express"
import { indexGetHandler, idGetHandler } from "./handlers/get.handler"

export const router: Router = Router()

router.route('/').get(indexGetHandler)

router.route("/:id").get(idGetHandler)