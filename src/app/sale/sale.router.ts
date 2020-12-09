import { Router } from "express"
import { salesGetHandler } from "./handlers/get.handler"

export const router: Router = Router()

router.route('/').get(salesGetHandler)