import { RequestHandler } from "express";
import { saleService } from "../sale.service";




export const putHandler: RequestHandler[] = [
    async (req,res) =>{

        try{
            res.json(await saleService.put({
                id: +req.params.id,
                customerName: "Dummy Edited",
            }));
        }catch(e){
            res.status(e.code).json(e);
        }

    }
]