import { ICake } from './cake.interface';
import { Status as CakeStatus } from './cake.enums';
import { CakeService } from './cake.service';

type CakeInjection = { cakeService: CakeService };

// Cake Class
class Cake implements ICake {
  // properties
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number = 0;
  status: CakeStatus = CakeStatus.OutOfStock;
  // Service
  cakeService: CakeService;
  // constructor
  constructor(cake: ICake, injection: CakeInjection) {
    this.cakeService = injection.cakeService || new CakeService();
    this.name = cake.name;
    this.description = cake.description;
    this.ingredients = cake.ingredients;
    this.price = cake.price;
    this.stock = cake.stock;
    this.status = cake.status;
  }
  // methods
  getDetail(): Cake {
    return this;
  }
}

export default Cake;
