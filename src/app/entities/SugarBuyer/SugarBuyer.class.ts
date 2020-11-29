import { Buyer } from '../../classes/Buyer.class';
import { SugarSeller, SugarTypes } from '../SugarSeller/SugarSeller.class';
//import { Seller } from '../../classes/Seller.class';

class SugarBuyer extends Buyer 
{
  constructor() {
    super();
  }
  buy(seller: SugarSeller, quantity: number, sugarType: SugarTypes)
  {
    return super.buy(seller, quantity, sugarType);
  }
}

export { SugarBuyer }