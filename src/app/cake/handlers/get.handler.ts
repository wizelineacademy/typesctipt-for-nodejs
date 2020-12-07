import { RequestHandler } from "express"
import { ICake } from '../../../types/interface/cake.interface'
import * as express from 'express';
import CakeService from '../cake.service'

export const indexGetHandler = async(req: express.Request, res: express.Response) => {
    const cakes = await CakeService.GetCakes().then((data: ICake) => {
        res.json(data)
        res.status(200).send(data)
    }).catch((error: Error) => {
        res.json(error)
        res.status(500).send("Error")
    })
}

export const idGetHandler = async(req: express.Request, res: express.Response) => {
    console.log(req.params.id)
    const cake = await CakeService.GetCake(req.params.id).then((data: ICake) => {
        res.json(data)
        res.status(200).send(data)
    }).catch((error: Error) => {
        res.json(error)
        res.status(500).send("Error")
    })
}