import { RequestHandler } from "express";
import { Sale } from "../data/sale.model";
import { SaleService } from "../sale.service";
import {asyncHandler} from "../../../component/async.handler";
import {container} from "tsyringe";





export const saleHandler: RequestHandler[] = [
    asyncHandler(
        async (req,res) =>{
            const service = container.resolve(SaleService);
            const data = req.body as Sale;
            res.json(await service.sale(data));
        }
    )
]