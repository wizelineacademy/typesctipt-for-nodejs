import { RequestHandler } from "express";
import { cakeService } from "../cake.service";




export const putHandler: RequestHandler[] = [
    async (req,res) =>{

        try{
            res.json(await cakeService.put({
                id: +req.params.id,
                name: "Dummy Edited",
                status: "OutOfStock"
            }));
        }catch(e){
            res.status(e.code).json(e);
        }

    }
]