import { RequestHandler, Request, Response } from "express"
// import { patchCake } from "../cake.service"

type Params = {}
type Query = {}
type Body = {}
type Req = Request<Params, {}, Body, Query>
type Res = Response

let patchNameSample = "Red Velvet"
let patchDataSample = {
    name: "Chocolate Cake",
    description: "A Chocolate Cake",
    price: 240,
    ingredients: ["Chocolate", "Milk"],
    stock: 20
}

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        // const cake = await patchCake(patchNameSample, patchDataSample)
        res.json({
            success: true, route: "/cakes", message: 'Updated a cake!',
            // data: cake 
        })
    }
]