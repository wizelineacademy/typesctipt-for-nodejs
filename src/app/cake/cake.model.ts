import { Schema } from 'mongoose';
import { CakeStatus } from './cake-status.enum';

export const CakeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Why no name?'],
    min: [5, 'Required, 5 characters min'],
    max: 50,
  },
  description: {
    type: String,
    min: [50, 'Required, 50 characters min'],
    max: 100,
  },
  ingredients: {
    type: [String],
  },
  price: {
    type: Number,
    default: 0,
    min: 0,
  },
  stock: {
    type: Number,
    default: 1,
    min: 1,
  },
  status: {
    type: String,
    enum: [CakeStatus.Available, CakeStatus.LastUnits, CakeStatus.OutOfStock],
  },
});

CakeSchema.path('ingredients').validate(function (val: []) {
  if (val.length < 3) {
    throw new Error("Assigned ingredient's size can't be least than 3!");
  }
});
