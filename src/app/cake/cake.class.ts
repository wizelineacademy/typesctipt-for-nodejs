import { dbMain } from '../app.database';
import { CakeService } from './cake.service';
import { CakeInjection } from '../app.di';
import { CakeStatus, ICake } from '../models/index';
import { CustomError } from '../../components/error.component';

export class Cake implements ICake {
  private _cakeService: CakeService;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  status: CakeStatus;

  constructor(injection?: CakeInjection) {
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
    const cake = await this._cakeService.getByName(this.name);
    if (cake) {
      throw new CustomError('Cake name already exists');
    }

    this.setStatusWithRules();
    const cakeId = await this._cakeService.insert(this.values);
    return cakeId;
  }

  async getCake(id: string): Promise<ICake> {
    const cake = await this._cakeService.getById(id);
    if (!cake) {
      throw new CustomError('Cake does not exists.');
    }
    return cake;
  }

  async getCakes(): Promise<ICake[]> {
    const cakes = await this._cakeService.getMany();
    return cakes;
  }

  async updateCake(id: string): Promise<ICake> {
    this.setStatusWithRules();
    const updatedCake = await this._cakeService.update(id, this.values);
    return updatedCake;
  }

  private setStatusWithRules(): void {
    if (this.stock === 0) {
      this.status = CakeStatus.OutOfStock;
    } else if (this.stock > 0 && this.stock < 10) {
      this.status = CakeStatus.LastUnits;
    } else {
      this.status = CakeStatus.Available;
    }
  }
}
