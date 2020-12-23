import { RequestHandler, Request, Response, NextFunction } from "express";
import { CakeService } from "../cake.service";
import { dbMain } from "../../app.database";
import { ICakeFilter, ICake } from '../cake.interface';

type Params = { cakeId?: string };
type Query = {
    priceGreater?: number,
    priceLesser?: number,
    ingredients?: string[],
};
type Body = {};
type Req = Request< Params, {}, Body, Query >;
type Res = Response;
type Next = NextFunction;

export const getHandler: RequestHandler[] = [
    async (req: Req, res: Res, next: Next) => {
        const { cakeId } = req.params;
        const cakesService = new CakeService(dbMain);
        try{
            const cake = await cakesService.getCakeInstance(cakeId);
            res.json(cake.getCakeDetails());
        }catch(error){
            next(error);
        }
    }
]

export const getAllHandler: RequestHandler[] = [
    async (req: Req, res: Res, next: Next) => {
        const cakeFilters: ICakeFilter = {};
        
        if(req.query.priceGreater){
            if(!cakeFilters.price) cakeFilters.price = {};
            cakeFilters.price.$gt = req.query.priceGreater;
        }

        if(req.query.priceLesser){
            if(!cakeFilters.price) cakeFilters.price = {};
            cakeFilters.price.$lt = req.query.priceLesser;
        }

        if(req.query.ingredients){
            cakeFilters.ingredients = {};
            cakeFilters.ingredients.$in = req.query.ingredients;
        }

        try{
            const cakesService = new CakeService(dbMain);
            const cakes = await cakesService.getAllCakes(cakeFilters);
            res.json(cakes);
        }catch(error){
            next(error);
        }
    }
]
