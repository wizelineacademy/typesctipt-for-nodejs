import { CakeStatus } from './CakeStatus.enum';

interface ICake {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;
}

export { ICake };
