import { RequestHandler, Response } from "express";

import { Cacke } from  "../cacke.class";
import { ICacke } from './../interfaces/cacke';
import { Logger } from "../../../utils/logger";
import { ResponseData } from "../../model/shared/response";
import { Req } from "../../model/shared/request";

export const handler: RequestHandler[] = [
    async (req: Req, res: Response) => {
        try {
            const cackeId: string = req.params.id;
            const cacke: Cacke = new Cacke();
            const data: ICacke = Object.keys(req.body).length != 0 ? req.body as ICacke : null;
            if (cackeId) {
                updateCacke(res, cacke, cackeId, data); 
            } else {
                saveCacke(res, cacke, data); 
            }
        } catch (e) {
            Logger.LogError(e);
            res.status(400).send(ResponseData.getResponse(e, null));
        }
  }
];


async function updateCacke(res, cacke, cackeId, data) {
    try {
        const cackeResult = await cacke.update(cackeId, data);
        if (cackeResult) {
            res.status(201).send(ResponseData.getResponse(`Cacke number ${cackeId} updated correctly`, cackeResult));
        } else {
            throw "Internal Server Error";
        }  
    } catch(e) {
        Logger.LogError(e);
        res.status(400).send(ResponseData.getResponse(e, null));
    }
}

async function saveCacke(res, cacke, data) {
    try {
        const cackeIdResult = await cacke.save(data);
        if (cackeIdResult) {
            res.status(201).send(ResponseData.getResponse("Cacke created", cackeIdResult));
        } else {
            throw "Internal Server Error";
        }  
    } catch(e) {
        Logger.LogError(e);
        res.status(400).send(ResponseData.getResponse(e, null));
    }
}