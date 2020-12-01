import { CakeStatus } from "../cake/cake-status.enum";

interface ICake {
  id?: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;
}

export { ICake };
