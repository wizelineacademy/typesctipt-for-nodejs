import { Seller } from '../../classes/Seller.class';

enum FlourTypes {
  Oat,
  Bread,
  Cake,
  Pastry,
  Almond,
  Corn
}

class FlourSeller extends Seller {
  constructor(name: string, stock: number) {
    super(name, stock);
  }
}

export { FlourSeller, FlourTypes}