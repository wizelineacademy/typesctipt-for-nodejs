import { RequestHandler } from "express";
import { cakeService } from "../cake.service";




export const getHandler: RequestHandler[] = [
    async (req,res) =>{
        res.json(await cakeService.get())
    }
]