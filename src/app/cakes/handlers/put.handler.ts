import { RequestHandler, Request, Response } from "express";
import { updateCake } from "../cake.service";
import { Cake } from "../cake.class";
import { Cake as CakeInterface } from "../cake.interface";

type Params = { cakeId?: number };
type Query = {};
type Body = {};
type Req = Request< Params, {}, Body, Query >;
type Res = Response;

export const updateHandler : RequestHandler[] = [
    async(req: Req, res: Res) => {
        const cake = req.body as CakeInterface;
        const { cakeId } = req.params;
        //const newCake = new Cake( cake );
        console.log({cakeId, cake});
        const cakeUpdated = await updateCake(cakeId, cake);
        res.json(cakeUpdated);
    }
]
