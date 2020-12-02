import { CakeStatus } from "./cake-status.enum";
import { ICake } from "./cake.interface";
import { CakeService } from "./cake.service";

class Cake implements ICake {
  protected cakeService: CakeService;
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;

  constructor(model: ICake) {
    this.name = model.name;
    this.description = model.description;
    this.price = model.price;
    this.stock = model.stock;
    this.ingredients = model.ingredients;
    this.status = CakeStatus.Available;
  }
}
export { Cake };
