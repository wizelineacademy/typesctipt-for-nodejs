import { Cake } from './cake.class';
import { iCake } from './cake.model';
import { CakeStatus } from './cake-status.enum';

let cakes: iCake[] = [];

export const getCake = () => {
  return new Promise((resolve, reject) => {
    resolve(cakes);
  });
};

export const makeCake = () => {
  return new Promise((resolve, reject) => {
    const data: iCake = {
      name: 'My Cake',
      description: 'Description My Cake',
      ingredients: ['Chocolate', 'Apple'],
      price: 5,
      stock: 10,
      status: CakeStatus.Available,
    };
    const cake = new Cake(data);
    cakes.push(cake);
    resolve(cake);
  });
};
