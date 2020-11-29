import { Seller } from '../classes/Seller.class'
import { IBuyer } from '../interfaces/IBuyer.interface';

class Buyer implements IBuyer {
  
  buy(seller: Seller, quantity: number, ingredient: number) 
  {
    return seller.sell(quantity);
  }
}

export { Buyer }