import { RequestHandler } from "express"
import { Request, Response } from "express"
import { getCakes } from "../cakes.service"

type Params = {}
type Query = {}
type Body = {}
type Req = Request<Params, {}, Body, Query>
type Res = Response


export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        const cakes = await getCakes()
        res.json({ success: true, route: "/cakes", message: 'Retrived cake list.', data: cakes })
    }

]

