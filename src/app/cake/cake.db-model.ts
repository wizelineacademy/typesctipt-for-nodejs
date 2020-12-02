import { model, Schema } from "mongoose";

export const modelName: string = 'Cakes';

model(modelName, new Schema({
  name: Schema.Types.String,
  description: Schema.Types.String,
  ingredients: Schema.Types.Array,
  price: Schema.Types.Number,
  stock: Schema.Types.Number,
  status: Schema.Types.String
}));
