import { ObjectId } from 'mongoose';
import { CakeStatus } from './cake.enum';
import { ICake } from './cake.interface';

export class Cake implements ICake{ 
  _id?: string
  name: string
  description: string
  ingredients: string[]
  price: number
  stock: number
  status: CakeStatus

  // Constructor
  constructor(values?: ICake) {
    this.setValues( values );
  }

  private setValues(values: ICake) {
    if (values) {
      this.name = values.name;
      this.description = values.description;
      this.ingredients = values.ingredients;
      this.price = values.price;
      this.stock = values.stock;
      this.status = values.status
    }
  }

}