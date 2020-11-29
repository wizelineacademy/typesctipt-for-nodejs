import { Seller } from '../../classes/Seller.class';

enum SugarTypes {
  Brown,
  Cane,
  Muscovado,
  Granulated
}

class SugarSeller extends Seller {
  // Just to make sure SugarSeller and FlourSeller don't follow the same structure and get rid of duck typing
  private x: string;
  constructor(name: string, stock: number)
  {
    super(name, stock);
  }
}

export { SugarSeller, SugarTypes }