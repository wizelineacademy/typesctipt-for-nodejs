import { Schema, model } from 'mongoose';
import { ICake } from './cake.interface';
import { Status } from './status.enum';

export const CakeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 50
  },
  description: { type: String, required: true, minlength: 50, maxlength: 1000 },
  ingredients: { type: [String], required: true, minlength: 3 },
  price: { type: Number, required: true, min: 1 },
  quantity: { type: Number, required: true, min: 0 },
  status: { type: Status, required: true }
});

export default model<ICake>('Cake', CakeSchema);
