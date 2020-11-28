import { RequestHandler } from "express";

import { saleService } from "../sale.service";




export const postHandler: RequestHandler[] = [
    async (req,res) =>{
        res.json(await saleService.post({
            customerName: "Dummy",
        }))
    }
]