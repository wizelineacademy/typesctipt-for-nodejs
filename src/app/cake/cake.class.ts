import { iCake } from './cake.interface';
import { CakeStatus } from './cake-status.enum';
import { dbConn } from './../app.database';
import { CakeService } from './cake.service';

export class Cake implements iCake {
  private cakeService: CakeService;

  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;

  constructor(cake: iCake) {
    this.cakeService = new CakeService(dbConn);
    this.name = cake.name;
    this.description = cake.description;
    this.ingredients = cake.ingredients;
    this.price = cake.price;
    this.stock = cake.stock;
    this.status = cake.status;
  }

  get cake(): iCake {
    const cake: iCake = {
      name: this.name,
      description: this.description,
      ingredients: this.ingredients,
      price: this.price,
      stock: this.stock,
      status: this.status,
    };

    return cake;
  }

  insert(): Promise<iCake> {
    return this.cakeService.insert(this.cake);
  }

  getCakeById(id: string) {
    return this.cakeService.getById(id);
  }
}
