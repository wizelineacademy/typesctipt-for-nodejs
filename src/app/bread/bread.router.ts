import { Router } from "express";

export const router: Router = Router();

router.route("/").get((req, res) => {
  res.json({ body: "Hello, Breads!" });
});
