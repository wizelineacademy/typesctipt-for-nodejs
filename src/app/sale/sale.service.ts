import { inject, injectable, registry } from "tsyringe";
import { DataService } from "../../component/data.service";
import { DbManager } from "../app.db";
import { CakeService } from "../cake/cake.service";
import { Sale } from "./data/sale.model";
import { SaleSchema } from "./data/sale.schema";
import { SaleValidator } from "./sale.validator";

@injectable()
@registry([
    { token: "SaleDataService", useFactory: (c) =>{
        return new DataService('Sale', SaleSchema, c.resolve(DbManager))
    } }
  ])
export class SaleService{
    constructor(
        private validator: SaleValidator,
        @inject("SaleDataService")
        private dataService: DataService<Sale>,
        private cakeService: CakeService
    ){
        
    }

    async sale( entity: Sale): Promise<Sale | null>{
        this.validator.execute(entity);
        // We maybe could create a CakeAPI service, thinking in a future microservice migration.
        await this.cakeService.adjustCakeStock(entity.cakeId,entity.totalAmount);
        return this.dataService.insert(entity);
    }
}
