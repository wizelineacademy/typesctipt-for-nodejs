import { createConnection } from 'mongoose';
import { DataService } from '../../components/data.service.component';
import { ICake } from './cake.interface';
import { Status } from './status.enum';
import cakeModel from './cake.model';

export class CakeService {
  private dataService: DataService<ICake>;

  constructor() {
    this.dataService = new DataService(
      createConnection(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`
      ),
      cakeModel.modelName
    );
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

    cake.status = this.getCurrentStatus(cake.quantity);

    return this.dataService.update(cake._id as string, cake);
  }

  async updateCakeQuantity(cake: ICake): Promise<boolean | ICake> {
    const cakeInStock = await this.getCake(cake.name);

    if (cakeInStock === undefined || cakeInStock?.quantity < cake.quantity)
      return false;

    cakeInStock.quantity = cakeInStock.quantity - cake.quantity;

    return this.updateCake(cakeInStock);
  }

  getCurrentStatus(quantity: number): Status {
    if (quantity > 10) return Status.Available;
    if (quantity === 0) return Status.OutOfStock;
    return Status.LastUnits;
  }

  isValidName(name: ICake['name']): Boolean {
    return name.length >= 5 && name.length <= 50;
  }

  isValidDescription(description: ICake['description']): Boolean {
    return description.length >= 50 && description.length <= 1000;
  }

  isValidIngredients(ingredients: ICake['ingredients']): Boolean {
    return ingredients.length >= 3;
  }

  isValidPrice(price: ICake['price']): Boolean {
    return price >= 1;
  }

  isValidQuantity(quantity: ICake['quantity']): Boolean {
    return quantity >= 0;
  }
}
