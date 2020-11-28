import { RequestHandler, Response } from "express";
import { postCacke, updateCacke } from "../cacke.service";

import { Cacke } from "../../model/cacke/cacke";
import { ResponseData, Req } from "../../model/shared/response";
import { Logger } from "../../../utils/logger";

export const handler: RequestHandler[] = [
    async (req: Req, res: Response) => {
        try {
            let cackeIdResult: number = null;
            const cackeId: string = req.params.id;
            //TODO: Make a Mapper, it's not working correctly the syntax "as Cacke"
            const data: Cacke = Object.keys(req.body).length != 0 ? req.body as Cacke : null;

            if (cackeId) {
                cackeIdResult = await updateCacke(cackeId);
                if (cackeIdResult) {
                    res.status(201).send(ResponseData.getResponse(`Cacke number ${cackeIdResult} updated correctly`, cackeIdResult));
                } else {
                    throw "Internal Server Error";
                }    

            } else {
                cackeIdResult = await postCacke(data);
                if (cackeIdResult) {
                    res.status(201).send(ResponseData.getResponse("Cacke created", cackeIdResult));
                } else {
                    throw "Internal Server Error";
                }    
            }

        } catch (e) {
            Logger.LogError(e);
            res.status(400).send(ResponseData.getResponse("Internal Server Error", null));
        }
  }
];