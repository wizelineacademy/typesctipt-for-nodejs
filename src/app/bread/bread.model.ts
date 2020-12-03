import { model, Schema } from "mongoose";

export const modelName: string = 'Bread';
export const collection: string = 'breads';

model(modelName, new Schema({
  name: Schema.Types.String,
  emoji: Schema.Types.String
}), collection);
