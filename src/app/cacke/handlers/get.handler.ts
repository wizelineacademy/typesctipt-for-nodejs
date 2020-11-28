import { RequestHandler, Response } from "express";
import { getCacke, getCackeById } from "../cacke.service";

import { ResponseData, Req } from "../../model/shared/response";
import { Logger } from "../../../utils/logger";

export const handler: RequestHandler[] = [
    async (req: Req, res: Response) => {
        try {
            const cackeId: string = req.params.id;
          
            if (cackeId) {
                const cacke = await getCackeById(cackeId);
                if (cacke) {
                    res.status(202).send(ResponseData.getResponse(`Get cacke by the id ${cackeId}`, cacke));
                } else {
                    throw "Internal Server Error";
                }
            } else {
                const cackes = await getCacke();
                if (cackes) {
                    res.status(202).send(ResponseData.getResponse("Get all the list of cackes", cackes));
                } else {
                    throw "Internal Server Error";
                }
            }
        } catch(e) {
            Logger.LogError(e);
            res.status(400).send(ResponseData.getResponse("Internal Server Error", null));
        }
  }
];