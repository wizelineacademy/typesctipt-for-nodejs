import { RequestHandler } from "express";
import { saleService } from "../sale.service";




export const getHandler: RequestHandler[] = [
    async (req,res) =>{
        res.json(await saleService.get())
    }
]