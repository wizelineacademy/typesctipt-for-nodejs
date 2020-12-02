import { CakeStatus } from "./cake-status.enum";

export class Cake {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: number;

  constructor(
    id: number,
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.price = price;
    this.stock = stock;
    this.status = CakeStatus.Available;
  }

  computeStatus() {
    if (this.stock == 0) {
      this.status = CakeStatus.OutOfStock;
    } else if (this.stock <= 10) {
      this.status = CakeStatus.LastUnits;
    } else {
      this.status = CakeStatus.Available;
    }
  }

  removeFromStock(quantity: number): boolean {
    if (this.stock >= quantity) {
      this.stock -= quantity;
      this.computeStatus();
      return true;
    }
    return false;
  }

  addToStock(quantity: number) {
    this.stock += quantity;
    this.computeStatus();
  }

  /**
   * Checks if the data for creating the cake object is according to the business rules
   */
  isValid(): boolean {
    if (this.name.length < 5 || this.name.length > 50) return false;
    if (this.description.length < 50 || this.description.length > 1000)
      return false;
    if (this.ingredients.length < 3) return false;
    for (let index = 0; index < this.ingredients.length; index++) {
      if (
        this.ingredients[index].length < 1 ||
        this.ingredients[index].length > 20
      )
        return false;
    }
    if (this.price <= 0) return false;
    if (this.stock <= -1) return false;

    return true;
  }
}
