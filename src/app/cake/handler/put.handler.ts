import { RequestHandler } from "express";
import { CakeService } from "../cake.service";
import { Cake } from "../data/cake.model";





export const putHandler: RequestHandler[] = [
    async (req,res) =>{

        try{
            const service = new CakeService();
            res.json(await service.put(req.params.id, req.body as Cake));
        }catch(e){
            res.status(e.code).json(e);
        }

    }
]