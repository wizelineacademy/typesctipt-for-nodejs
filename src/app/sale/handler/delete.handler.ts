import { RequestHandler } from "express";
import { saleService } from "../sale.service";




export const deleteHandler: RequestHandler[] = [
    async (req,res) =>{
        try{
            res.json(await saleService.delete(+req.params.id));
        }catch(e){
            res.status(e.code).json(e);
        }

    }
]