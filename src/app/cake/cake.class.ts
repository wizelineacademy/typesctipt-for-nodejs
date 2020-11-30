import { iCake } from './cake.model';
import { eStatusCake } from './cake-status.enum';

export class Cake implements iCake {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: eStatusCake;

  constructor(cake: iCake) {
    this.name = cake.name;
    this.description = cake.description;
    this.ingredients = cake.ingredients;
    this.price = cake.price;
    this.stock = cake.stock;
    this.status = cake.status;
  }

  newCake(cake: iCake): number {
    console.log('Save a cake');
    return 1;
  }

  getCakes(filter: string): string[] {
    return [];
  }

  detailCake(id: number): [] {
    return [];
  }

  editCake(cake: iCake): number {
    console.log('Edit cake');
    return 1;
  }
}
