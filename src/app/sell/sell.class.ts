import { CackeService } from "../cacke/cacke.service";
import { dbMain } from "../app.database";
import { ISell } from './interfaces/sell';
import { SellService } from './sell.service';

export class Sell {
    private sellService: SellService;
    private cackeService: CackeService;
    sell: ISell;

    constructor() {
        this.sellService = new SellService(dbMain);
        this.cackeService = new CackeService(dbMain);
    }

    async save(sell: ISell) {
        const isCackeAvaliable = await this.cackeService.isCackeAvaliableForSale(sell);
        if (isCackeAvaliable) {
            await this.cackeService.decresaseCackeStock(sell);
            return this.sellService.save(sell);
        } else {
            throw "Cacke can't be sold";
        }
    }
    
}