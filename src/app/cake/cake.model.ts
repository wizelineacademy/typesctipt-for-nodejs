export type Status = 'Available' | 'LastUnits' | 'OutOfStock';

export interface CakeInterface {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  quantity: number;
  status: Status;
}
