import { resolve } from 'path';
import { CakeInterface } from './cake.model';

let cakes: CakeInterface[] = [];

export const getCakes = () => {
  return new Promise<CakeInterface[]>((resolve) => {
    setTimeout(() => {
      resolve(cakes);
    }, cakes.length * 100);
  });
};

export const getCake = (name: string) => {
  return new Promise<CakeInterface | undefined>((resolve) => {
    setTimeout(() => {
      resolve(cakes.find((cake) => cake.name === name));
    }, 100);
  });
};

export const insertCake = (cake: CakeInterface) => {
  return new Promise<CakeInterface>((resolve) => {
    setTimeout(() => {
      cakes.push(cake);
      resolve(cake);
    }, 100);
  });
};

export const updateCake = (cake: CakeInterface) => {
  return new Promise<CakeInterface>((resolve) => {
    setTimeout(() => {
      cakes = cakes.map((oldCake) =>
        oldCake.name === cake.name ? cake : oldCake
      );
      resolve(cake);
    }, 100);
  });
};

export const updateCakeQuantity = (cake: CakeInterface) => {
  return new Promise<boolean>(async (resolve) => {
    const cakeInStock = await getCake(cake.name);
    if (cakeInStock === undefined) {
      resolve(false);
    } else if (cakeInStock?.quantity >= cake.quantity) {
      cakeInStock.quantity = cakeInStock.quantity - cake.quantity;
      await updateCake(cakeInStock);
      resolve(true);
    } else {
      resolve(false);
    }
  });
};
