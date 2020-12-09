import { RequestHandler, Response } from 'express';
import { Cake }  from "../cake.class";
import { Logger } from "../../../utils/logger";
import { ResponseData } from "../../models/response";
import { Req } from "../../models/request";
import { ICake } from "../interfaces/Cake";
import { IFilter } from "../interfaces/Filter";

export const handler: RequestHandler[] = [
    async (req: Req, res: Response) => {
        try {
            const cake: Cake = new Cake();
            const cakeId: string = req.params.id;
            if (cakeId) {  
                updateCake(res, cake, cakeId);
            } else {
                let cakes: ICake[] = await cake.getAllCakes();
                cakes = filterCakesByPrice(req, cakes);
                cakes = filterCakesByIngredient(req, cakes);
                sendListOfCakes(cakes, res);
            }
        } catch(e) {
            Logger.LogError(e);
            res.status(400).send(ResponseData.getResponse(e, null));
        }
    }
]

function filterCakesByPrice(req, cakes: ICake[]) {
    let queryParams: IFilter = req.query;
    if (queryParams.minPrice || queryParams.maxPrice) {
        if (queryParams.minPrice && !queryParams.maxPrice) {
            cakes = cakes.filter( cake => cake.price > queryParams.minPrice );
        }
        if (queryParams.maxPrice && !queryParams.minPrice) {
            cakes = cakes.filter( cake => cake.price < queryParams.maxPrice );
        }
        if (queryParams.minPrice && queryParams.maxPrice) {
            cakes = cakes.filter( cake => (cake.price > queryParams.minPrice && cake.price < queryParams.maxPrice ) );
        }
    }
    return cakes;
}

function filterCakesByIngredient(req, cakes: ICake[]) { 
    let queryParams: IFilter = req.query;
    if (queryParams.ingredient) {
        cakes = cakes.filter( cake => cake.ingredients.includes(queryParams.ingredient));
    }
    return cakes;
}

async function sendListOfCakes(cakes, res) {
    if (cakes) {
        res.status(202).send(ResponseData.getResponse("Get all the list of cackes", cakes));
    } else {
        throw "There are no cackes in the db";
    }
}

async function updateCake(res, cake, cakeId) {
    const currentCake = await cake.getCake(cakeId);
    if (currentCake) {
        res.status(202).send(ResponseData.getResponse(`Get cacke by the id ${cakeId}`, currentCake));
    } else {
        throw "The cacke doesn't exists";
    }
}