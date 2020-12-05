import { model, Schema } from "mongoose";

export const modelName: string = 'Sales';

model(modelName, new Schema({
  customerName: Schema.Types.String,
  customerPhoneNumber: Schema.Types.String,
  customerEmail: Schema.Types.String,
  cakeId: Schema.Types.String,
  quantity: Schema.Types.Number,
}));
