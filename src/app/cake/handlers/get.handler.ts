import { RequestHandler } from "express"

import * as express from 'express';
import { getCakes, getCake } from '../cake.service'

export const indexGetHandler = async(req: express.Request, res: express.Response) => {
    const cakes = await getCakes()
    res.json(cakes)
}

export const idGetHandler = async(req: express.Request, res: express.Response) => {
    console.log(req.params.id)
    const cake = await getCake(req.params.id)
    res.json(cake)
}