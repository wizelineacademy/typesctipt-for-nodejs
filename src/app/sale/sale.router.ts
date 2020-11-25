import { Router } from "express";

export const router: Router = Router();

router.route('/')
  .post((req, res) => {
    res.json('This endpoint registers a new sell');
  })
  .get((req, res) => {
    res.json('This endpoint lists all the sales given a week and year');
  });