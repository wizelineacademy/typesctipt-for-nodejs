import { RequestHandler, Request, Response, NextFunction } from "express";
import { Cake } from "../cake.class";

type Params = { cakeId?: string };
type Query = {};
type Body = {
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number,
    status: string
};
type Req = Request< Params, {}, Body, Query >;
type Res = Response;
type Next = NextFunction;

export const createHandler : RequestHandler[] = [
    async(req: Req, res: Res, next: Next) => {
        const cake: Cake = new Cake(req.body);
        try{
            const cakeId = await cake.save();
            res.json(cakeId);
        }catch(error){
            next(error);
        }
        
    }
]

