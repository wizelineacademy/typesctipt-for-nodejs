import { Router } from "express";
import { hanlder as getHanlder } from "./handlers/get.handler";
import { hanlder as postHanlder } from "./handlers/post.handler";

export const router: Router = Router();

router.route('/')
  .get(getHanlder)
  .post(postHanlder);
