
import { Router } from "express";
import { saleHandler } from "./handler/sale.handler";



export const saleRouter = Router();

saleRouter.route("/sale")
    .post(saleHandler)