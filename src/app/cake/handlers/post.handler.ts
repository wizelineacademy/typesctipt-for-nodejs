import * as express from 'express';
import { makeCake } from '../cake.service'

export const indexPostHandler = async(req: express.Request, res: express.Response) => {
    await makeCake(req.body).then(() => {
        res.json("Register cakes!")
        res.status(200)
    })
    .catch((err) => {
        res.json(err)
        res.status(500)
    })
}