import { DataService } from "../../component/data.service";
import { Sale } from "./data/sale.model";
import { SaleSchema } from "./data/sale.schema";


export class SaleService{

    constructor(
        private dataService: DataService<Sale> = new DataService('Sale', SaleSchema)
    ){
    }
    sale( entity: Sale): Promise<Sale | null>{
        return this.dataService.insert(entity);
    }
}
