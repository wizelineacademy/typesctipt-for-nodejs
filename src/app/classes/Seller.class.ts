import { ISeller } from "../interfaces/ISeller.interface";

class Seller implements ISeller {
  name: string;
  stock: number;
  constructor(name: string, stock: number)
  {
    this.name = name;
    this.stock = stock;
  }

  sell(quantity: number): number {
    return this.stock - quantity;
  }

}

export { Seller }