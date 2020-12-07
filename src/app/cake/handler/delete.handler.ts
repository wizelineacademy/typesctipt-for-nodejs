import { RequestHandler } from "express";
import { CakeService } from "../cake.service";
import {container} from "tsyringe";


export const deleteHandler: RequestHandler[] = [
    async (req,res) =>{
        try{
            const service = container.resolve(CakeService);
            res.json(await service.delete(req.params.id));
        }catch(e){
            res.status(e.code).json(e);
        }

    }
]