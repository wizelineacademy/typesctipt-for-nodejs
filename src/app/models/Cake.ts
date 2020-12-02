import { CakeStatus } from './Cake-status.enum';

export interface ICake {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;
}
