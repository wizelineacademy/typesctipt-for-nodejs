import { Router } from "express";

export const router: Router = Router();

router.route('/')
  .post((req, res) => {
    res.json('This endpoint registers a new cake');
  })
  .get((req, res) => {
    res.json('This endpoint lists all the cakes');
  })
  .put((req, res) => {
    res.json('This endpoint updates a registered cake');
  });

router.route('/:id').get((req, res) => {
  res.json(`This endpoint gets the cake with id: ${req.params.id}`);
});