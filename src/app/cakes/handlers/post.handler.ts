import { RequestHandler, Request, Response } from "express";
import { createCake } from "../cake.service";
import { Cake } from "../cake.class";
import { Cake as CakeInterface } from "../cake.interface";

type Params = { cakeId?: number };
type Query = {};
type Body = {};
type Req = Request< Params, {}, Body, Query >;
type Res = Response;

export const createHandler : RequestHandler[] = [
    async(req: Req, res: Res) => {
        const cake = req.body as CakeInterface;
        const newCake = new Cake( cake );
        console.log(newCake);
        const cakeCreated = await createCake(newCake);
        res.json(cakeCreated);
    }
]

