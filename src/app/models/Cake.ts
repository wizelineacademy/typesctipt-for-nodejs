enum CakeStatus {
  'Available',
  'LastUnits',
  'OutOfStock',
}
interface ICake {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;
}

export { CakeStatus, ICake };
