import { RequestHandler, Request, Response, NextFunction } from "express";
import { CakeService } from "../cake.service";
import { Cake } from "../cake.class";
import { ICake } from "../cake.interface";

type Params = { cakeId?: string };
type Query = {};
type Body = {};
type Req = Request< Params, {}, Body, Query >;
type Res = Response;
type Next = NextFunction;

export const updateHandler : RequestHandler[] = [
    async(req: Req, res: Res, next: Next) => {
        const cakeValues = req.body as ICake;
        const { cakeId } = req.params;
        const cake: Cake = new Cake(cakeValues);
        try{
            const cakeUpdated = await cake.update(cakeId);
            res.json(cakeUpdated);
        }catch(error){
            next(error);
        }
        
    }
]
