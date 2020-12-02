import { RequestHandler } from "express";

import { CakeService } from "../cake.service";
import { Cake } from "../data/cake.model";




export const postHandler: RequestHandler[] = [
    async (req,res) =>{
        const service = new CakeService();
        const data = req.body as Cake;
        try{
            res.json(await service.post(data));

        }catch(e){
            res.status(500).json(e)
        }
    }
]