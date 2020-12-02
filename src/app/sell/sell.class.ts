import { CackeService } from "../cacke/cacke.service";
import { dbMain } from "../app.database";
import { ISell } from './interfaces/sell';
import { SellService } from './sell.service';
import { ICacke } from "../cacke/interfaces/cacke";
import {CackeStatus} from "../cacke/enums/cackestatus";

export class Sell {
    private sellService: SellService;
    private cackeService: CackeService;
    sell: ISell;

    constructor() {
        this.sellService = new SellService(dbMain);
        this.cackeService = new CackeService(dbMain);
    }

    async save(sell: ISell) {
        const isCackeAvaliable = await this.isCackeAvaliableForSale(sell);
        if (isCackeAvaliable) {
            this.decresaseCackeStock(sell);
            return this.sellService.save(sell);
        } else {
            throw "Cacke cant be sold";
        }
    }

    /**Cannot be sold a quantity greater than the current stock. */
    private async isCackeAvaliableForSale(sell: ISell): Promise<boolean> {
        const cacke = await this.cackeService.getCacke(sell.cackeId);
        if (cacke.stock < sell.quantity) {
            return false;
        }
        return true;
    }
    
    /**Each time that cake is sold, the stock should decrease depending on the quantity bought by the customer. */
     private async decresaseCackeStock(sell: ISell) {
        let cacke = await this.cackeService.getCacke(sell.cackeId);
        cacke.stock = cacke.stock - sell.quantity;
        cacke.status = this.getNewStatus(cacke.stock);
        //TODO: verify why is not working the edit
        this.cackeService.edit(sell.cackeId.toString(), cacke);
    }

    //TODO: move later this function to the utils place for cacke
    private getNewStatus(stock: number): CackeStatus {
        if (stock > 10) {
            return CackeStatus.Avaliable;
        }
        else if (stock < 10 && stock > 0) {
            return CackeStatus.LastUnits;
        }
        else {
            return CackeStatus.OutOfStock;
        }
    }
}