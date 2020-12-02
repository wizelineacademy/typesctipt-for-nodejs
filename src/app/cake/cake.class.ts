import { CakeStatus } from './cake.enum';
import { ICake } from './cake.interface';

export class Cake implements ICake{ 
  name: string
  description: string
  ingredients: string[]
  price: number
  stock: number
  status: CakeStatus

  // Constructor
  constructor(name: string,description: string,ingredients: string[],price: number,stock: number,status: CakeStatus,) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.price = price;
    this.stock = stock;
  }
}