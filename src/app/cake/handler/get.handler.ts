import { RequestHandler } from "express";
import { CakeService } from "../cake.service";




export const getHandler: RequestHandler[] = [
    async (req,res) =>{
        const service = new CakeService();

        res.json(await service.get())
    }
]