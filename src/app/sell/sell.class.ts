import { CakeService } from '../cake/cake.service';
import { dbMain } from '../app.database';
import { ISell } from './interfaces/Sell';
import { SellService } from './sell.service';

export class Sell {
    private sellService: SellService;
    private cakeService: CakeService;
    sell: ISell;

    constructor() {
        this.sellService = new SellService(dbMain);
        this.cakeService = new CakeService(dbMain);
    }

    async save(sell: ISell) {
        const isCakeAvaliable = await this.cakeService.isCakeAvaliableForSale(sell);
        if (isCakeAvaliable) {
            await this.cakeService.decresaseCakeStock(sell);
            return this.sellService.save(sell);
        } else {
            throw "Cake can't be sold";
        }
    }
    
}