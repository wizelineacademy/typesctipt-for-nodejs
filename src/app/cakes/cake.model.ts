import { model, Schema } from "mongoose";

export const modelName: string = 'Cake';
export const collection: string = 'cakes';

const cakeSchema = new Schema({
    name: Schema.Types.String,
    descrition: Schema.Types.String,
    ingredients: [Schema.Types.String],
    price: Schema.Types.Number,
    stock: Schema.Types.Number
});

model(modelName, cakeSchema, collection);