import * as express from "express";
import { makeSale } from '../sale.service'

export const salesPostHandler = async(req: express.Request, res: express.Response) => {
    const newSale = await makeSale(req.body)
    res.status(200).send('Ok')
}