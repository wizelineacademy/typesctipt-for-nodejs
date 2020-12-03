import { createConnection } from 'mongoose';
import { ISale } from './sale.interface';
import { DataService } from '../../components/data.service.component';
import { CakeService } from '../cake/cake.service';
import saleModel from './sale.model';

export class SaleService {
  private dataService: DataService<ISale>;
  private cakeService: CakeService;

  constructor() {
    const connection = createConnection(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
    console.log(saleModel);
    this.dataService = new DataService(connection, saleModel.modelName);
    this.cakeService = new CakeService();
  }

  getSales(): Promise<ISale[]> {
    return this.dataService.fetchMany();
  }

  insertSale(sale: ISale): Promise<string> | boolean {
    if (this.cakeService.updateCakeQuantity(sale.cake)) {
      return this.dataService.insert(sale);
    }
    return false;
  }
}
