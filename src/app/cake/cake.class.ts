import { dbMain } from '../app.database';
import { ICake } from '../models/ICake';
import { CakeStatus } from '../models/CakeStatus.enum';
import { CakeService } from './cake.service';

export type CakeInjection = {
  cakeService?: CakeService;
};

export class Cake implements ICake {
  private _cakeService: CakeService;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;

  constructor(injection: CakeInjection) {
    this._cakeService = injection?.cakeService || new CakeService(dbMain);
  }

  get values(): ICake {
    return {
      name: this.name,
      description: this.description,
      ingredients: this.ingredients,
      price: this.price,
      stock: this.stock,
      status: this.status,
    };
  }

  set values(values: ICake) {
    if (values) {
      this.name = values.name;
      this.description = values.description;
      this.ingredients = values.ingredients;
      this.price = values.price;
      this.stock = values.stock;
      this.status = values.status;
    }
  }

  async makeCake(): Promise<string> {
    const cakeId = await this._cakeService.insert(this.values);
    return cakeId;
  }

  async getCake(id: string): Promise<ICake> {
    const cake = await this._cakeService.getById(id);
    return cake;
  }

  async getCakes(): Promise<ICake[]> {
    const cakes = await this._cakeService.getMany();
    return cakes;
  }

  async deleteCake(id: string): Promise<ICake> {
    const deletedCake = await this._cakeService.delete(id);
    return deletedCake;
  }
}
