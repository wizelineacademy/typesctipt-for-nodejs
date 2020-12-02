import { RequestHandler } from "express";
import { CakeService } from "../cake.service";

export const deleteHandler: RequestHandler[] = [
    async (req,res) =>{
        try{
            const service = new CakeService();
            res.json(await service.delete(req.params.id));
        }catch(e){
            res.status(e.code).json(e);
        }

    }
]