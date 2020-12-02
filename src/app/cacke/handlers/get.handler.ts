import { RequestHandler, Response } from "express";

import { Cacke }  from "../cacke.class";
import { ResponseData, Req } from "../../model/shared/response";
import { Logger } from "../../../utils/logger";

export const handler: RequestHandler[] = [
    async (req: Req, res: Response) => {
        try {
            const cacke: Cacke = new Cacke();
            const cackeId: string = req.params.id;
            if (cackeId) {  
                const currentCacke = await cacke.getCacke(cackeId);
                if (currentCacke) {
                    res.status(202).send(ResponseData.getResponse(`Get cacke by the id ${cackeId}`, currentCacke));
                } else {
                    throw "The cacke doesn't exists";
                }
            } else {
                const cackes = await cacke.getAllCackes();
                if (cackes) {
                    res.status(202).send(ResponseData.getResponse("Get all the list of cackes", cackes));
                } else {
                    throw "There are no cackes in the db";
                }
            }
        } catch(e) {
            Logger.LogError(e);
            res.status(400).send(ResponseData.getResponse(e, null));
        }
    }
]