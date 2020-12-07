import { RequestHandler, Response } from "express";

import { Cacke }  from "../cacke.class";
import { Logger } from "../../../utils/logger";
import { ResponseData } from "../../model/shared/response";
import { Req } from "../../model/shared/request";
import { ICacke } from "../interfaces/cacke";
import { IFilter } from "../interfaces/filter";

export const handler: RequestHandler[] = [
    async (req: Req, res: Response) => {
        try {
            const cacke: Cacke = new Cacke();
            const cackeId: string = req.params.id;
            if (cackeId) {  
                updateCacke(res, cacke, cackeId);
            } else {
                let cackes: ICacke[] = await cacke.getAllCackes();
                cackes = filterCackesByPrice(req, cackes);
                cackes = filterCackesByIngredient(req, cackes);
                sendListOfCackes(cackes, res);
            }
        } catch(e) {
            Logger.LogError(e);
            res.status(400).send(ResponseData.getResponse(e, null));
        }
    }
]


/**
 * Supported filter
 * i.e 
 * localhost:3000/cackes?minPrice={number}&maxPrice={number}
 * localhost:3000/cackes?minPrice={number}
 * localhost:3000/cackes?maxPrice={number}
 */
function filterCackesByPrice(req, cackes: ICacke[]) {
    let queryParams: IFilter = req.query;
    if (queryParams.minPrice || queryParams.maxPrice) {
        if (queryParams.minPrice && !queryParams.maxPrice) {
            cackes = cackes.filter( cacke => cacke.price > queryParams.minPrice );
        }
        if (queryParams.maxPrice && !queryParams.minPrice) {
            cackes = cackes.filter( cacke => cacke.price < queryParams.maxPrice );
        }
        if (queryParams.minPrice && queryParams.maxPrice) {
            cackes = cackes.filter( cacke => (cacke.price > queryParams.minPrice && cacke.price < queryParams.maxPrice ) );
        }
    }
    return cackes;
}

/**
 * Supported filter
 * i.e 
 * localhost:3000/cackes?ingredient={nameOfIngredient}
 * localhost:3000/cackes?ingredient=vanilla
 */
function filterCackesByIngredient(req, cackes: ICacke[]) { 
    let queryParams: IFilter = req.query;
    if (queryParams.ingredient) {
        cackes = cackes.filter( cacke => cacke.ingredients.includes(queryParams.ingredient));
    }
    return cackes;
}

async function sendListOfCackes(cackes, res) {
    if (cackes) {
        res.status(202).send(ResponseData.getResponse("Get all the list of cackes", cackes));
    } else {
        throw "There are no cackes in the db";
    }
}

async function updateCacke(res, cacke, cackeId) {
    const currentCacke = await cacke.getCacke(cackeId);
    if (currentCacke) {
        res.status(202).send(ResponseData.getResponse(`Get cacke by the id ${cackeId}`, currentCacke));
    } else {
        throw "The cacke doesn't exists";
    }
}