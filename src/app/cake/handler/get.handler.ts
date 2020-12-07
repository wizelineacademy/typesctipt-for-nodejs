import { RequestHandler } from "express";
import { CakeService } from "../cake.service";
import {container} from "tsyringe";




export const getHandler: RequestHandler[] = [
    async (req,res) =>{
        const service = container.resolve(CakeService);

        res.json(await service.get())
    }
]