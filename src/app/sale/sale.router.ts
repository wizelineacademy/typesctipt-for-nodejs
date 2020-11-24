
import { Router } from "express";

export const router: Router = Router();

router.route("/")
    .get((req, res) => {
        res.send('List sales');
    })
    .post((req, res) => {
        res.send('Sell cake');
    });

router.route("/:id")
    .get((req, res) => {
        res.send('Sale detail');
    });
