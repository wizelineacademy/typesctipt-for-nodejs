import { Status as CakeStatus } from './cake.enums';
export interface ICake {
  _id?: string; // Pendong for mongoose setting?
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;
}
