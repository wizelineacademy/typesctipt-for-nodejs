import { iCake } from './cake.interface';
import { CakeStatus } from './cake-status.enum';
export class Cake implements iCake {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;

  constructor(cake: iCake) {
    this.name = cake.name;
    this.description = cake.description;
    this.ingredients = cake.ingredients;
    this.price = cake.price;
    this.stock = cake.stock;
    this.status = this.validateStatus();
  }

  get cake(): iCake {
    const cake: iCake = {
      name: this.name,
      description: this.description,
      ingredients: this.ingredients,
      price: this.price,
      stock: this.stock,
      status: this.status,
    };

    return cake;
  }

  /*
    BUSINESS RULES
    When the stock is greater than 10, the status of the cake is Available.
    When the stock is less than 10, the status of the cake is LastUnits.
    When the stock is 0, the status of the cake is OutOfStock.
  */

  validateStatus(): CakeStatus {
    if (this.stock >= 10) {
      this.status = CakeStatus.Available;
    } else if (this.stock < 10 && this.stock > 0) {
      this.status = CakeStatus.LastUnits;
    } else {
      this.status = CakeStatus.OutOfStock;
    }

    return this.status;
  }

  validate(): string[] {
    let error: string[] = [];
    const min = (min: number, actual: number) => actual >= min;
    const max = (max: number, actual: number) => actual <= max;

    /* 
      Name: Required, 5 characters min., 50 characters max.
      Description: Required, 50 characters min., 1000 characters max.
      Ingredients: Required, at least 3 ingredients. Per ingredient: 1 character min. 20 characters max.
      Price: Required, greater than 0.
      Stock: Required, greater than -1.
    */

    if (this.name.length === 0) {
      error.push(`The cupcake name is required`);
    } else if (!min(5, this.name.length)) {
      error.push(
        `The cupcake name mustn't be smaller than 5 but was ${this.name.length}`
      );
    } else if (!max(50, this.name.length)) {
      error.push(
        `The cupcake name mustn't be greater than 50 but was ${this.name.length}`
      );
    }

    if (this.description.length === 0) {
      error.push(`The cupcake description is required`);
    } else if (!min(50, this.description.length)) {
      error.push(
        `The cupcake description mustn't be smaller than 50 but was ${this.description.length}`
      );
    } else if (!max(100, this.description.length)) {
      error.push(
        `The cupcake description mustn't be greater than 100 but was ${this.description.length}`
      );
    }

    if (this.ingredients.length === 0) {
      error.push(`The cupcake ingredients is required`);
    } else if (this.ingredients.length < 3) {
      error.push(
        `The cupcake ingredients  mustn't be smaller than 3 but was ${this.ingredients.length}`
      );
    } else if (this.ingredients.length >= 3) {
      this.ingredients.map((ingredient) => {
        if (!min(1, ingredient.length)) {
          error.push(
            `The cupcake ingredient mustn't be smaller than 1 but was ${ingredient.length}`
          );
        } else if (!max(20, ingredient.length)) {
          error.push(
            `The cupcake ingredient mustn't be greater than 20 but was ${ingredient.length}`
          );
        }
        return error;
      });
    }

    if (this.price <= 0) {
      error.push(
        `The cupcake price mustn't be smaller than 0 but was ${this.price}`
      );
    }
    if (this.stock <= -1) {
      error.push(
        `The cupcake stock mustn't be greater than -1 but was ${this.stock}`
      );
    }

    return error;
  }
}
