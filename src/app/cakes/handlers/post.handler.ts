import { RequestHandler } from "express"
import { Request, Response } from "express"
import { Cake } from "../cake.class"
import { ICake } from "../cake.interface"

type Params = {}
type Query = {}
type Body = ICake
type Req = Request<Params, {}, Body, Query>
type Res = Response

let postDataSample = {
    name: "Red Velvet",
    description: "A Red Velvet Cake",
    ingredients: ["Red", "Velvet", "Vanilla"],
    price: 420,
    stock: 10
}

// export const handler: RequestHandler[] = [
//     async (req: Req, res: Res) => {
//         console.log(req.body);
//         const cake = new CakeService()
//         res.json({ success: true, route: "/cakes", message: 'Posted new cake!', data: cake })
//     }

// ]

export const handler: RequestHandler[] = [

    async (req: Req, res: Res) => {

        let cake: Cake = new Cake();
        let payload = req.body as ICake

        cake.name = payload.name;
        cake.description = payload.description;
        cake.ingredients = payload.ingredients;
        cake.price = payload.price;
        cake.stock = payload.stock;

        let savedCake = await cake.save();

        res.json(savedCake);
    }
];

