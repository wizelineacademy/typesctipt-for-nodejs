import { CakeStatus } from './cake-status.enum';

export interface iCake {
  id?: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;
}
