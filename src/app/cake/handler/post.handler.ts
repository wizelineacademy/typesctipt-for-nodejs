import { RequestHandler } from "express";

import { CakeService } from "../cake.service";
import { Cake } from "../data/cake.model";
import {container} from "tsyringe";
import { asyncHandler } from "../../../component/async.handler";




export const postHandler: RequestHandler[] = [
    asyncHandler(async (req,res) =>{
        const service = container.resolve(CakeService);
        const data = req.body as Cake;
        res.json(await service.post(data));
        }
    )
]