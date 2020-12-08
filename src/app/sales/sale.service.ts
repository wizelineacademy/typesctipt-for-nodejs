import { Connection } from "mongoose"
import { DataService } from "../../components/data-service.component"
import { modelName } from "./sale.model"
import { Sale } from "./sale.class"
import { ISale } from "./sale.interface"
import { CakeService } from "../cakes/cake.service"
import { db as dbMain } from "../app.database"
export class SaleService {

    // Declare an instance of the db service, passing the cake interface to its generic type.
    private dataService: DataService<ISale>
    private cakeService: CakeService


    constructor(connection?: Connection) {
        this.dataService = new DataService(connection!, modelName)
        this.cakeService = new CakeService(dbMain);
    }

    getCakes(): Promise<ISale[]> {
        return this.dataService.fetchMany()
    }

    getById(saleId: string): Promise<ISale> {
        return this.dataService.getOne(saleId)
    }

    save(sale: ISale): Promise<ISale> {
        return this.dataService.insert(sale)
    }

    update(id?: string, sale?: ISale): Promise<ISale> {
        return this.dataService.update(id, sale)
    }

    delete(id?: string, sale?: ISale): Promise<ISale> {
        return this.dataService.delete(id, sale)
    }

    sell(sale: ISale): Promise<ISale> {
        this.cakeService.updateStock(sale)
        return this.dataService.insert(sale)
    }

}