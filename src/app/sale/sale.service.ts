import { ISale } from './sale.interface';
import { DataService } from '../../components/mongo-data-service-component';
import { SellSchema, modelName } from './sale.model';
import { dbConn as connection } from '../app.db';

export class SaleService {
  private dataService: DataService<ISale>;

  constructor() {
    this.dataService = new DataService(connection, modelName, SellSchema);
  }

  // insert
  createSale(saleData: ISale): Promise<string> {
    console.log('insert: ' + modelName);
    return this.dataService.insert(saleData);
  }
  // getMany
  getSales(): Promise<ISale[]> {
    console.log('getMany: ' + modelName);
    return this.dataService.fetchMany();
  }
  // getOneById
  getSale(saleId: string): Promise<ISale> {
    console.log('getOneById ' + modelName);
    return this.dataService.fetchOne(saleId);
  }
  // updateOneById
  editSale(saleId: string, saleData: ISale): Promise<ISale> {
    console.log('updateOneById ' + modelName);
    return this.dataService.update(saleId, saleData);
  }
}
