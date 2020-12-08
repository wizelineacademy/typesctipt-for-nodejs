import { RequestHandler, Request, Response } from "express"
import { Cake } from "../cake.class"

type Params = { id?: string }
type Query = {}
type Body = {}
type Req = Request<Params, {}, Body, Query>
type Res = Response

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {

        let idToDelete = req.params.id
        let cake = new Cake

        const deletedCake = await cake.delete(idToDelete)

        res.json({
            success: true, route: "/cakes", message: 'Deleted a cake!',
            data: deletedCake
        })
    }
]
