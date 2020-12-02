import { ICake } from './cake.interface';
import { Status as CakeStatus } from './cake.enums';
// Cake Class
class Cake implements ICake {
  // properties
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;
  // constructor
  constructor(
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number = 0,
    status: CakeStatus = CakeStatus.OutOfStock
  ) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.price = price;
    this.stock = stock;
    this.status = status;
  }
  // methods
  getDetail(): Cake {
    return this;
  }
}

export default Cake;
