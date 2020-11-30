import { CakeSell } from './sell.class';
import { iSell } from './sell.model';
import { iCake } from './../cake/cake.model';
import { CakeStatus } from './../cake/cake-status.enum';

let sells: iSell[] = [];

export const sellCake = () => {
  return new Promise((resolve, reject) => {
    const cake: iCake = {
      name: 'My Cake',
      description: 'Description My Cake',
      ingredients: ['Chocolate', 'Apple'],
      price: 5,
      stock: 10,
      status: CakeStatus.Available,
    };

    const sell: iSell = {
      customerName: 'Fava',
      customerPhoneNumber: '5555555555',
      customerEmail: 'fava.narvaez@gmail.com',
      totalAmount: 10,
      cake: cake,
    };

    let sale = new CakeSell(sell);
    sells.push(sale);
    resolve(sale);
  });
};

export const lessCake = () => {
  return new Promise((resolve, reject) => {
    console.info('Less Cake');
    resolve(sells);
  });
};
