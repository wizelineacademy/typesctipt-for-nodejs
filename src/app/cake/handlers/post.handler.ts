import { RequestHandler, Response } from 'express';
import { Cake }  from "../cake.class";
import { Logger } from "../../../utils/logger";
import { ResponseData } from "../../models/response";
import { Req } from "../../models/request";
import { ICake } from "../interfaces/Cake";


export const handler: RequestHandler[] = [
    async (req: Req, res: Response) => {
        try {
            const cakeId: string = req.params.id;
            const cake: Cake = new Cake();
            const data: ICake = Object.keys(req.body).length != 0 ? req.body as ICake : null;
            if (cakeId) {
                updateCake(res, cake, cakeId, data); 
            } else {
                saveCake(res, cake, data); 
            }
        } catch (e) {
            Logger.LogError(e);
            res.status(400).send(ResponseData.getResponse(e, null));
        }
  }
];


async function updateCake(res, cake, cakeId, data) {
    const cakeResult = await cake.update(cakeId, data);
    if (cakeResult) {
        res.status(201).send(ResponseData.getResponse(`Cake number ${cakeId} updated correctly`, cakeResult));
    } else {
        throw "Internal Server Error";
    }  
}

async function saveCake(res, cake, data) {
    const cakeIdResult = await cake.save(data);
    if (cakeIdResult) {
        res.status(201).send(ResponseData.getResponse("Cake created", cakeIdResult));
    } else {
        throw "Internal Server Error";
    }  
}