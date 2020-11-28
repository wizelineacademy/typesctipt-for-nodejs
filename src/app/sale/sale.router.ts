
import { Router } from "express";
import { deleteHandler } from "./handler/delete.handler";
import { getHandler } from "./handler/get.handler";
import { postHandler } from "./handler/post.handler";
import { putHandler } from "./handler/put.handler";



export const saleRouter = Router();

saleRouter.route("sale/")
    .get(getHandler)
    .post(postHandler)
saleRouter.route("sale/:id")
    .put(putHandler)
    .delete(deleteHandler)