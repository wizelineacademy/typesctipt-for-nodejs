import { Cake } from "./cakes.class";

export class CakeBuilder {
  private _cake: Cake;
  constructor() {
    this._cake = new Cake(0, "", "", [], 0, 0);
  }

  id(id: number): CakeBuilder {
    this._cake.id = id;
    return this;
  }

  name(name: string): CakeBuilder {
    this._cake.name = name;
    return this;
  }
  description(description: string): CakeBuilder {
    this._cake.description = description;
    return this;
  }
  ingredients(ingredients: string[]): CakeBuilder {
    this._cake.ingredients = ingredients;
    return this;
  }
  price(price: number): CakeBuilder {
    this._cake.price = price;
    return this;
  }
  stock(stock: number): CakeBuilder {
    this._cake.stock = stock;
    this._cake.setStatus();
    return this;
  }

  build(): Cake {
    this._cake.setStatus();
    return this._cake;
  }
}
