export const enum statusCake {
  Available = 'Available',
  LastUnits = 'LastUnits',
  OutOfStock = 'OutOfStock',
}

export interface CakeInterface {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: statusCake;

  newCake(
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number
  ): number;

  getCakes(filter: string): string[];

  detailCake(id: number): [];

  editCake(
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number
  ): number;
}
