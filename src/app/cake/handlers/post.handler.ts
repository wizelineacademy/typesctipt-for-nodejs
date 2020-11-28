import * as express from 'express';
import { makeCake } from '../cake.service'

export const indexPostHandler = async(req: express.Request, res: express.Response) => {
    res.json("Register cakes!")
    await makeCake(req.body)
    res.status(200)
}