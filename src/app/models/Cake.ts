const enum CakeStatus {
  LastUnits = "LastUnits",
  OutOfStock = "OutOfStock",
  Available = "Available",
}

interface ICake {
  id?: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;
}

class Cake implements ICake {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;

  constructor(model: ICake) {
    this.name = model.name;
    this.description = model.description;
    this.price = model.price;
    this.stock = model.stock;
    this.ingredients = model.ingredients;
    this.status = CakeStatus.Available;
  }
}
export { CakeStatus, ICake, Cake };
