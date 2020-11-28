
import { Router } from "express";
import { deleteHandler } from "./handler/delete.handler";
import { getHandler } from "./handler/get.handler";
import { postHandler } from "./handler/post.handler";
import { putHandler } from "./handler/put.handler";



export const cakeRouter = Router();

cakeRouter.route("/cake")
    .get(getHandler)
    .post(postHandler)
cakeRouter.route("/cake/:id")
    .put(putHandler)
    .delete(deleteHandler)