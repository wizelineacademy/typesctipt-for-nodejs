import { CackeService } from "../cacke/cacke.service";
import { dbMain } from "../app.database";
import { ISell } from './interfaces/sell';
import { SellService } from './sell.service';
import { Types } from "mongoose";

export class Sell {
    private sellService: SellService;
    private cackeService: CackeService;
    sell: ISell;

    constructor() {
        this.sellService = new SellService(dbMain);
        this.cackeService = new CackeService(dbMain);
    }

    async save(sell: ISell) {
        const error = await this.handleSaveValidations(sell);
        if (error === null) {
            await this.cackeService.decresaseCackeStock(sell);
            return this.sellService.save(sell);
        } else {
            throw(error.message);
        }
    }

    private async handleSaveValidations(sell: ISell) {
        try 
        {
            if (!Types.ObjectId.isValid(sell.cackeId)) {
                throw new Error("Invalid cacke id");
            }
            const isCackeAvaliable = await this.cackeService.isCackeAvaliableForSale(sell);

            if (!isCackeAvaliable) {
                throw new Error("Cannot be sold a quantity greater than the current stock.");
            }
        } catch(e) {
            return (e);
        }
    }
}