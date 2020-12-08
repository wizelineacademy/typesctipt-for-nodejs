import { RequestHandler, Request, Response } from "express"
import { Cake } from "../cake.class"
import { ICake } from "../cake.interface"
// import { patchCake } from "../cake.service"

type Params = { id?: string }
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

        let idToUpdate = req.params.id
        let payload = req.body as ICake

        let cake = new Cake

        cake.name = payload.name;
        cake.description = payload.description;
        cake.ingredients = payload.ingredients;
        cake.price = payload.price;
        cake.stock = payload.stock;

        let updatedCake = await cake.update(idToUpdate)

        res.json({ success: true, route: "/cakes", message: 'Cake was updated.', data: updatedCake })
    }
];