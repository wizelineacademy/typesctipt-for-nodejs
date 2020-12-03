import { Status as CakeStatus } from './cake.enums';
export interface ICake {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;
}