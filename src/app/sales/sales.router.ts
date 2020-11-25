import { Router } from "express";

export const router: Router = Router()

router.route('/')
    .get((req, res) => {

        res.json({ success: true, route: "/sales", message: 'Retrieved sales list.' })
    })
    .post((req, res) => {

        res.json({ success: true, route: "/sales", message: 'Posted new sale!' })
    })
    .patch((req, res) => {

        res.json({ success: true, route: "/sales", message: 'Updated a sale!' })
    })

