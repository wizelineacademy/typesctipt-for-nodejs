
import { Router } from "express";
import { saletHandler } from "./handler/sale.handler";



export const saleRouter = Router();

saleRouter.route("/sale")
    .post(saletHandler)