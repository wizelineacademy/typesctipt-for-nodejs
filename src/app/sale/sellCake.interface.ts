export interface ISellCake {
  cakeId: string; // for saving reference to cake catalog
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  quantity: number;
}
