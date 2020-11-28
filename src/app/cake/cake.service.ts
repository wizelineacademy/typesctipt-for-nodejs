import { ICake, CakeStatus } from '../models/index';

const cakes: ICake[] = [
  {
    description: 'Tasty cake',
    ingredients: ['Glass', 'Sugar'],
    price: 12.99,
    name: 'Red velvet',
    status: CakeStatus.LastUnits,
    stock: 3,
  },
  {
    description: 'Tastier cake',
    ingredients: ['Glass', 'Sugar', 'Egg'],
    price: 13.99,
    name: 'Cheese Cake',
    status: CakeStatus.Available,
    stock: 10,
  },
];

export const getCakes = async (): Promise<ICake[]> => {
  await timeout(2000);
  return [...cakes];
};

const timeout = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
