import { ICacke } from './../interfaces/cacke';
import { RequestHandler, Response } from "express";

import { Cacke } from  "../cacke.class";
import { ResponseData, Req } from "../../model/shared/response";
import { Logger } from "../../../utils/logger";

export const handler: RequestHandler[] = [
    async (req: Req, res: Response) => {
        try {
            let cackeIdResult: string = null;
            const cackeId: string = req.params.id;
            const cacke: Cacke = new Cacke();
            //TODO: Make a Mapper, it's not working correctly the syntax "as Cacke"
            const data: ICacke = Object.keys(req.body).length != 0 ? req.body as ICacke : null;
            if (cackeId) {
                const cackeResult = await cacke.update(cackeId, data);
                if (cackeResult) {
                    res.status(201).send(ResponseData.getResponse(`Cacke number ${cackeId} updated correctly`, cackeResult));
                } else {
                    throw "Internal Server Error";
                }   
            } else {
                cackeIdResult = await cacke.save(data);
                if (cackeIdResult) {
                    res.status(201).send(ResponseData.getResponse("Cacke created", cackeIdResult));
                } else {
                    throw "Internal Server Error";
                }    
            }
        } catch (e) {
            Logger.LogError(e);
            res.status(400).send(ResponseData.getResponse(e, null));
        }
  }
];