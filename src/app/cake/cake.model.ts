export type Status = 'Available' | 'LastUnits' | 'OutOfStock';

export interface ICake {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  quantity: number;
  status: Status;
}
