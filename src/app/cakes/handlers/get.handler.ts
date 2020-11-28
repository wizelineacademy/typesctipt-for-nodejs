import { RequestHandler, Request, Response } from "express";
import { getAllCakes, getCake } from "../cake.service";

type Params = { cakeId?: number };
type Query = {};
type Body = {};
type Req = Request< Params, {}, Body, Query >;
type Res = Response;

export const getHandler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        const { cakeId } = req.params;
        const cakes = await getCake(cakeId);
        res.json(cakes);
    }
]

export const getAllHandler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        const cakes = await getAllCakes();
        res.json(cakes);
    }
]
