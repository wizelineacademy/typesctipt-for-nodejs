import { Router } from "express";

export const router: Router = Router()


router.route('/')
    .get((req, res) => {

        res.json({ success: true, route: "/cakes", message: 'Retrived cake list.' })
    })
    .post((req, res) => {

        res.json({ success: true, route: "/cakes", message: 'Posted new cake!' })
    })
    .patch((req, res) => {

        res.json({ success: true, route: "/cakes", message: 'Updated a cake!' })
    })