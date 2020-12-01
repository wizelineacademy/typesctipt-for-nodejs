import { ISale } from './sale.model';
import { updateCakeQuantity } from '../cake/cake.service';

let sales: ISale[] = [];

export const getSales = () => {
  return new Promise<ISale[]>((resolve) => {
    setTimeout(() => {
      resolve(sales);
    }, sales.length * 100);
  });
};

export const insertSale = (sale: ISale) => {
  return new Promise<ISale | false>((resolve) => {
    setTimeout(async () => {
      if (updateCakeQuantity(sale.cake)) {
        sales.push(sale);
        resolve(sale);
      } else {
        resolve(false);
      }
    }, 100);
  });
};
