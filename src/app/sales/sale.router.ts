import { Router } from "express";
import { createHandler } from "./handlers/post.handler";


export const router: Router = Router();

//router.route('/').get(getAllHandler);
router.route('/').post(createHandler);
