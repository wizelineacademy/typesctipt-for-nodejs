import { Status } from './status.enum';

export interface ICake {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  quantity: number;
  status: Status;
}
