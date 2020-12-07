import { RequestHandler, Request, Response } from "express"

type Params = {}
type Query = {}
type Body = {}
type Req = Request<Params, {}, Body, Query>
type Res = Response

let deleteNameSample = "Chocolate Cake"

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        // const cake = await deleteCake(deleteNameSample)
        res.json({
            success: true, route: "/cakes", message: 'Deleted a cake!',
            // data: cake 
        })
    }
]
