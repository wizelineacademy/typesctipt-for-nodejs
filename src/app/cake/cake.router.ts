import { Router } from "express"

export const router: Router = Router()

router.route('/').get(function(req, res){
    res.json("Hello, cakes!")
})