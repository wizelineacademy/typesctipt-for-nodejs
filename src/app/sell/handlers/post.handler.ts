import { RequestHandler, Response } from "express";

import { ISell } from "../interfaces/sell";
import { Logger } from "../../../utils/logger";
import { Req } from "../../models/request";
import { ResponseData } from "../../models/response";
import { Sell  } from "../sell.class";

export const handler: RequestHandler[] = [
    async (req: Req, res: Response) => {
        try {
            const sell: Sell = new Sell();
            const data: ISell = Object.keys(req.body).length != 0 ? req.body as ISell : null;
            if (data) { 
                saveSell(sell, data, res)
            } else {
                throw "Internal Server Error";
            }
        } catch (e) {
            Logger.LogError(e);
            res.status(400).send(ResponseData.getResponse(e, null));
        }
  }
];

async function saveSell(sell, data, res) {
    const sellResult = await sell.save(data);
    if (sellResult) {
        res.status(201).send(ResponseData.getResponse(`The sell was created`, sellResult));
    } else {
        throw "Internal Server Error";
    }
}