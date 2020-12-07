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
    this.dataService = new DataService(connection, saleModel.modelName);
    this.cakeService = new CakeService();
  }

  getSales(): Promise<ISale[]> {
    return this.dataService.fetchMany();
  }

  insertSale(sale: ISale): Promise<string> | boolean {
    if (this.cakeService.updateCakeQuantity(sale.cake))
      return this.dataService.insert(sale);
    return false;
  }

  isValidCustomerName(customerName: ISale['customerName']): Boolean {
    return customerName.length >= 3 && customerName.length <= 50;
  }

  isValidCustomerPhoneNumber(
    customerPhoneNumber: ISale['customerPhoneNumber']
  ): Boolean {
    return customerPhoneNumber.length >= 10;
  }

  isValidCustomerEmail(customerEmail: ISale['customerEmail']): Boolean {
    if (customerEmail === undefined) return false;
    return customerEmail.length >= 5 && customerEmail.length <= 1000;
  }
}
