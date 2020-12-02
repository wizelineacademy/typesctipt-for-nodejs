import { model, Schema } from 'mongoose';

export const modelName: string = 'Cake';
export const collection: string = 'cakes';

model(
  modelName,
  new Schema({
    name: Schema.Types.String,
    descrition: Schema.Types.String,
    ingredients: [
      {
        type: String,
      },
    ],
    price: Schema.Types.Number,
    stock: Schema.Types.Number,
  }),
  collection
);
