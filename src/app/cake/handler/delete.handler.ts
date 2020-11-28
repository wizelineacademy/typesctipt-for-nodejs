import { RequestHandler } from "express";
import { cakeService } from "../cake.service";




export const deleteHandler: RequestHandler[] = [
    async (req,res) =>{

        try{
            res.json(await cakeService.delete(+req.params.id));
        }catch(e){
            res.status(e.code).json(e);
        }

    }
]