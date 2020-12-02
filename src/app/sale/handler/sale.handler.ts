import { RequestHandler } from "express";
import { Sale } from "../data/sale.model";
import { SaleService } from "../sale.service";
import {asyncHandler} from "../../../component/async.handler";





export const saletHandler: RequestHandler[] = [
    asyncHandler(
        async (req,res) =>{
            const service = new SaleService();
            const data = req.body as Sale;
            res.json(await service.sale(data));
        }
    )
]