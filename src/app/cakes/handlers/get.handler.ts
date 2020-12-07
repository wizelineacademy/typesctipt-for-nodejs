import { RequestHandler } from "express"
import { Request, Response } from "express"
import { db as dbMain } from "../../app.database"
import { CakeService } from "../cake.service"

type Params = {}
type Query = {}
type Body = {}
type Req = Request<Params, {}, Body, Query>
type Res = Response


export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        const service = new CakeService(dbMain)
        const cakes = await service.getCakes()
        res.json({ success: true, route: "/cakes", message: 'Retrived cake list.', data: cakes })
    }
]

