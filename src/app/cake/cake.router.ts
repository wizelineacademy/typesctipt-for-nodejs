
import { Router } from "express";

export const router: Router = Router();

router.route("/")
    .get((req, res) => {
        res.send('List cakes');
    })
    .post((req, res) => {
        res.send('Register new cake');
    });

router.route("/:id")
    .get((req, res) => {
        res.send('Cake detail');
    })
    .put((req, res) => {
        res.send('Edit cake');
    });
