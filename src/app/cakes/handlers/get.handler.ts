import { RequestHandler } from "express"
import { Request, Response } from "express"
import { db as dbMain } from "../../app.database"
import { CakeService } from "../cake.service"

type Params = {}
type Query = { id?: string }
type Body = {}
type Req = Request<Params, {}, Body, Query>
type Res = Response

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        const service = new CakeService(dbMain)

        if (req.query.id) {
            const cake = await service.getById(req.query.id)
            res.json({ success: true, route: "/cakes", message: `Retrived cake ${req.query.id}.`, data: cake })
        } else {
            const cakes = await service.getCakes()
            res.json({ success: true, route: "/cakes", message: 'Retrived all cakes.', data: cakes })
        }

    }
]

