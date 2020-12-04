import { ICake } from './cake.interface';
import { Status as CakeStatus } from './cake.enums';
import { CakeService } from './cake.service';

type CakeInjection = { cakeService: CakeService };

// Cake Class
class Cake implements ICake {
  // properties
  _id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number = 0;
  status: CakeStatus = CakeStatus.OutOfStock;
  // data service property to be injected
  cakeService: CakeService;
  // constructor
  constructor(cake: ICake, injection: CakeInjection) {
    this.cakeService = injection.cakeService || new CakeService();
    this.setValues(cake);
  }
  // Accesors (getter/setter)
  get cake(): ICake {
    // returns a compatible structure
    return {
      name: this.name,
      description: this.description,
      ingredients: this.ingredients,
      price: this.price,
      stock: this.stock,
      status: this.status,
    };
  }

  set cake(cakeValues: ICake) {
    this.setValues(cakeValues);
  }

  // methods
  setValues(cakeValues: ICake): void {
    if (cakeValues) {
      this.name = cakeValues.name;
      this.description = cakeValues.description;
      this.ingredients = cakeValues.ingredients;
      this.price = cakeValues.price;
      this.stock = cakeValues.stock;
      this.status = cakeValues.status;
    }
  }
  // DAO logic through service
  public async save() {
    // validate fields...
    // save fields
    this._id = await this.cakeService.createCake(this.cake);
  }
  // Business Logic as required by the challenge
  validateName(): void {
    // Field Rules
    const minLength: number = 5;
    const maxLength: number = 50;
    const hasValue: boolean = !!this.name;
    // actual validation
    if (hasValue) {
      const isTooShort: boolean = this.name.length < minLength;
      const isTooLong: boolean = this.name.length > maxLength;
      if (isTooLong || isTooShort) {
        throw new Error(
          `The Name is too ${
            isTooLong ? 'long' : 'short'
          }, its length must be between 5 and 50 characters.`
        );
      }
    } else {
      throw new Error(`The Name of the cake is required.`);
    }
  }

  validateDescription(): void {
    // Field Rules
    const minLength: number = 50;
    const maxLength: number = 1000;
    const hasValue: boolean = !!this.description;
    // actual validation
    if (hasValue) {
      const isTooShort: boolean = this.description.length < minLength;
      const isTooLong: boolean = this.description.length > maxLength;
      if (isTooLong || isTooShort) {
        throw new Error(
          `The Description is too ${
            isTooLong ? 'long' : 'short'
          }, its length must be between 50 and 1000 characters.`
        );
      }
    } else {
      throw new Error(`The Description of the cake is required.`);
    }
  }
  // TO DO
  validateIngredients(): void {
    // Field constraints
    const minAmountOfIngredients: number = 3;
    const hasEnoughIngredients: boolean =
      this.ingredients.length >= minAmountOfIngredients;
    // actual validation
    if (hasEnoughIngredients) {
      this.ingredients.forEach((ingredient) => {
        if (!this.isValidIngredient(ingredient)) {
          throw new Error(
            `The ingredient ${ingredient} must have between 1 and 20 characters.`
          );
        }
      });
    } else {
      throw new Error(`The cake needs at least three ingredients.`);
    }
  }

  isValidIngredient(ingredient: string): boolean {
    // Field Rules
    const minLength: number = 1;
    const maxLength: number = 20;
    const hasValue: boolean = !!ingredient;
    // actual validation
    if (hasValue) {
      const isTooShort: boolean = ingredient.length < minLength;
      const isTooLong: boolean = ingredient.length > maxLength;
      if (isTooLong || isTooShort) {
        return false;
      }
      // Alles gut
      return true;
    } else {
      return false;
    }
  }

  validatePrice(): void {
    // Field Rules
    const lowestPrice: number = 0;
    const hasValue: boolean = !!this.price;
    // actual validation
    if (hasValue) {
      if (!(this.price > lowestPrice)) {
        throw new Error(`The Price must be greater than $0.`);
      }
    } else {
      throw new Error(`The Price of the cake is required.`);
    }
  }

  validateStock(): void {
    // Field Rules
    const minStock: number = 0;
    const hasValue: boolean = !!this.stock;
    // actual validation
    if (hasValue) {
      if (this.stock < minStock) {
        // Just in the case since zero is a positive number...
        throw new Error(`The Stock must be a positive amount or zero.`);
      }
    } else {
      throw new Error(`The Stock of the cake is required.`);
    }
  }
}

export default Cake;
