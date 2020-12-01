import { resolve } from 'path';
import { ICake } from './cake.model';

let cakes: ICake[] = [];

export const getCakes = () => {
  return new Promise<ICake[]>((resolve) => {
    setTimeout(() => {
      resolve(cakes);
    }, cakes.length * 100);
  });
};

export const getCake = (name: string) => {
  return new Promise<ICake | undefined>((resolve) => {
    setTimeout(() => {
      resolve(cakes.find((cake) => cake.name === name));
    }, 100);
  });
};

export const insertCake = (cake: ICake) => {
  return new Promise<ICake>((resolve) => {
    setTimeout(() => {
      cakes.push(cake);
      resolve(cake);
    }, 100);
  });
};

export const updateCake = (cake: ICake) => {
  return new Promise<ICake>((resolve) => {
    setTimeout(() => {
      cakes = cakes.map((oldCake) =>
        oldCake.name === cake.name ? cake : oldCake
      );
      resolve(cake);
    }, 100);
  });
};

export const updateCakeQuantity = (cake: ICake) => {
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
