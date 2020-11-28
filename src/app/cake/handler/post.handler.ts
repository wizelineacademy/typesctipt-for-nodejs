import { RequestHandler } from "express";

import { cakeService } from "../cake.service";




export const postHandler: RequestHandler[] = [
    async (req,res) =>{
        res.json(await cakeService.post({
            name: "Dummy",
            status: 'Available'
        }))
    }
]