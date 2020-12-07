import { CakeStatus } from './CakeStatus.enum';

interface ICake {
  _id?: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;
}

export { ICake };
