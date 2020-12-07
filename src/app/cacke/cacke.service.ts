import { DataService } from "../../components/data-service.component";
import { ICacke } from "./interfaces/cacke";
import { modelName } from './cacke.model';
import { Cacke } from "./cacke.class";
import { ISell } from "../sell/interfaces/sell";

export class CackeService {
    private dataService: DataService<ICacke>;

    constructor(db) {
      this.dataService = new DataService(db, modelName);
    }

    getAllCakes(): Promise<ICacke[]> {
        return this.dataService.fetchMany()
    }

    getCacke(id: string) {
        return this.dataService.get(id);
    }

    edit(id:string, cacke:ICacke) {
        this.changeStatusCacke(cacke);
        return this.dataService.patch(id, cacke);
    }

    save(cacke: ICacke): Promise<string> {
        this.changeStatusCacke(cacke);
        return this.dataService.insert(cacke);
    } 

    private changeStatusCacke(cacke: ICacke) {
        cacke.status = Cacke.getNewCackeStatus(cacke.stock);
    }

    /**Each time that cake is sold, the stock should decrease depending on the quantity bought by the customer. */
    async decresaseCackeStock(sell: ISell) {
        let cacke = await this.getCacke(sell.cackeId);
        const stock = cacke.stock - sell.quantity;
        const status = Cacke.getNewCackeStatus(cacke.stock);
        var cackeUpdated: ICacke = {
            stock: stock,
            status: status,
            name: cacke.name,
            description: cacke.description,
            price: cacke.price,
            ingredients: cacke.ingredients
        };
        await this.edit(sell.cackeId.toString(), cackeUpdated);
    }

    /**Cannot be sold a quantity greater than the current stock. */
    async isCackeAvaliableForSale(sell: ISell): Promise<boolean> {
        const cacke = await this.getCacke(sell.cackeId);
        if (cacke.stock < sell.quantity) {
            return false;
        }
        return true;
    }
}