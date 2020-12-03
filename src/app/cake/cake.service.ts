import { createConnection } from 'mongoose';
import { DataService } from '../../components/data.service.component';
import { ICake } from './cake.interface';
import cakeModel from './cake.model';

let cakes: ICake[] = [];

export class CakeService {
  private dataService: DataService<ICake>;

  constructor() {
    const connection = createConnection(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
    this.dataService = new DataService(connection, cakeModel.modelName);
  }

  getCakes(): Promise<ICake[]> {
    return this.dataService.fetchMany();
  }

  getCake(cakeName: string): Promise<ICake> {
    return this.dataService.fetchOne({
      name: cakeName
    });
  }

  insertCake(cake: ICake): Promise<string> {
    return this.dataService.insert(cake);
  }

  async updateCake(cake: ICake): Promise<ICake> {
    const currentCake = await this.getCake(cake.name);
    cake._id = currentCake._id;

    return this.dataService.update(cake._id as string, cake);
  }

  async updateCakeQuantity(cake: ICake): Promise<boolean | ICake> {
    const cakeInStock = await this.getCake(cake.name);
    if (cakeInStock === undefined || cakeInStock?.quantity < cake.quantity) {
      return false;
    }
    cakeInStock.quantity = cakeInStock.quantity - cake.quantity;
    return this.updateCake(cakeInStock);
  }
}
