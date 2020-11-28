import { Cake } from "../models/Cake";

let cakes: Cake[];

export const getCakes = async (): Promise<Cake[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cakes);
    }, 2000);
  });
};

export const createCake = async (model: any): Promise<Cake> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cake = new Cake(model);
      cakes.push(cake);
      resolve(cake);
    });
  });
};

export const updateCake = async (id: string, model: any): Promise<Cake> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cakes.map((cake) => {
        if (cake.id === id) {
          cake = { ...cake, ...model };
          resolve(cake);
        }
      }, 2000);
    });
  });
};

export const deleteCake = async (id: string): Promise<Cake[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredCakes = cakes.filter((cake) => cake.id !== id);
      resolve(filteredCakes);
    }, 2000);
  });
};
