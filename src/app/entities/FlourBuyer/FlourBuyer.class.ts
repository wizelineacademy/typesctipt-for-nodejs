import { Buyer } from '../../classes/Buyer.class';
import { FlourSeller, FlourTypes } from '../FlourSeller/FlourSeller.class';

class FlourBuyer extends Buyer {
  constructor() {
    super();
  }

  public buy(seller: FlourSeller, quantity: number, flourType: FlourTypes) 
  {
    return super.buy(seller, quantity, flourType);
  }
}

export { FlourBuyer }