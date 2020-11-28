import { RequestHandler } from "express"
import { Request, Response } from "express"
import { postCake } from "../cakes.service"

type Params = {}
type Query = {}
type Body = {}
type Req = Request<Params, {}, Body, Query>
type Res = Response

let postDataSample = {
    name: "Red Velvet",
    description: "A Red Velvet Cake",
    ingredients: ["Red", "Velvet", "Vanilla"],
    price: 420,
    stock: 10
}

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        const cake = await postCake(
            postDataSample
        )
        res.json({ success: true, route: "/cakes", message: 'Posted new cake!', data: cake })
    }

]

