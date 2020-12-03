import { Schema, model } from 'mongoose';
import { ICake } from './cake.interface';
import { Status } from './status.enum';

export const CakeSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  status: { type: Status, required: true }
});

export default model<ICake>('Cake', CakeSchema);
