import * as express from "express";
import { ISale } from '../../../types/interface/sale.interface'
import SaleService from '../sale.service'

export const salesPostHandler = async(req: express.Request, res: express.Response) => {
    const newSale = await SaleService.SellCake(req.body)
    .then((data: ISale) => {
        res.status(200).send('Ok')
    }).catch((error: Error) => {
        res.status(500).send('Not Ok')
    })
}