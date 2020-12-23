//import { salesMocks } from '../../utils/mocks/sales.mock';
import { Connection } from "mongoose";
import { DataService } from "../../components/data-service.component";
import { ISale } from "../sales/sale.interface";
import { modelName } from "./sale.model";
import { Sale } from "./sale.class";

type SaleClass = Sale;

export class SaleService {
    private dataService: DataService<ISale>;

    constructor(connection: Connection){
        this.dataService = new DataService(connection, modelName);
    }

    registerSale(sale: ISale): Promise<string>{
        return this.dataService.insert(sale);
    }

    public async getSaleInstance(id: string){
        const saleValues = await this.dataService.findById(id);
        const sale: SaleClass = new Sale(saleValues);
        return sale;
    }
}

