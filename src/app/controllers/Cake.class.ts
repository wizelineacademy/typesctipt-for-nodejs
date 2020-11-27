import { CakeInterface, statusCake } from './../models/cake.model';

class Cake implements CakeInterface {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: statusCake;

  constructor(
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number,
    status: statusCake
  ) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.price = price;
    this.stock = stock;
    this.status = status;
  }

  newCake(
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number
  ): number {
    console.log('Save a cake');
    return 1;
  }

  getCakes(filter: string): string[] {
    return [];
  }

  detailCake(id: number): [] {
    return [];
  }

  editCake(
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number
  ): number {
    console.log('Edit cake');
    return 1;
  }
}
