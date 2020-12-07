import { Schema } from 'mongoose';
import { CakeStatus } from './cake-status.enum';

export const CakeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Why no name?'],
    },
    description: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 1,
    },
    stock: {
      type: Number,
      required: true,
      default: 1,
    },
    status: {
      type: String,
      enum: [CakeStatus.Available, CakeStatus.LastUnits, CakeStatus.OutOfStock],
    },
  },
  {
    timestamps: true,
  }
);

export const modelName: string = 'Cake';
