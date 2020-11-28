import { RequestHandler, Response } from "express";
import { postSell } from "../sell.service";

import { ResponseData, Req } from "../../model/shared/response";
import { Logger } from "../../../utils/logger";
import { Sell } from "../../model/sell/sell";

export const handler: RequestHandler[] = [
    async (req: Req, res: Response) => {
        try {
             //TODO: Make a Mapper, it's not working correctly the as syntax "as Sell"
            const data: Sell = Object.keys(req.body).length != 0 ? req.body as Sell : null;
            if (data) {
                const sell = await postSell(data);
                if (sell) {
                    res.status(201).send(ResponseData.getResponse(`The sell was created`, sell));
                } else {
                    throw "Internal Server Error";
                }
            } else {
                throw "Internal Server Error";
            }
        } catch (e) {
            Logger.LogError(e);
            res.status(400).send(ResponseData.getResponse("Internal Server Error", null));
        }
  }
];