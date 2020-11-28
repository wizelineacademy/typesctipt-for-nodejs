import { SaleInterface } from './sale.model';
import { updateCakeQuantity } from '../cake/cake.service';

let sales: SaleInterface[] = [];

export const getSales = () => {
  return new Promise<SaleInterface[]>((resolve) => {
    setTimeout(() => {
      resolve(sales);
    }, sales.length * 100);
  });
};

export const insertSale = (sale: SaleInterface) => {
  return new Promise<SaleInterface | false>((resolve) => {
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
