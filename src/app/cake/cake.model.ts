import { Schema } from 'mongoose';

export const modelName: string = 'Cake';
export const collection: string = 'cakes';

export const CakeSchema = new Schema(
  {
    name: { type: Schema.Types.String, index: true, unique: true },
    description: { type: Schema.Types.String },
    ingredients: { type: [Schema.Types.String] },
    price: { type: Schema.Types.Number },
    stock: { type: Schema.Types.Number },
    status: { type: Schema.Types.String },
  },
  { collection, timestamps: true }
);
