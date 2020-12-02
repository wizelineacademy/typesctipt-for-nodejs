import { RequestHandler, Response } from "express";

import { Sell  } from "../sell.class";
import { ISell } from "../interfaces/sell";
import { ResponseData, Req } from "../../model/shared/response";
import { Logger } from "../../../utils/logger";

export const handler: RequestHandler[] = [
    async (req: Req, res: Response) => {
        try {
             //TODO: Make a Mapper, it's not working correctly the as syntax "as Sell"
            const sell: Sell = new Sell();
            const data: ISell = Object.keys(req.body).length != 0 ? req.body as ISell : null;
            if (data) {
                const sellResult = await sell.save(data);
                if (sellResult) {
                    res.status(201).send(ResponseData.getResponse(`The sell was created`, sellResult));
                } else {
                    throw "Internal Server Error";
                }
            } else {
                throw "Internal Server Error";
            }
        } catch (e) {
            Logger.LogError(e);
            res.status(400).send(ResponseData.getResponse(e, null));
        }
  }
];