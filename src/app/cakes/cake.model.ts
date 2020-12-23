import { model, Schema } from "mongoose";

export const modelName: string = "Cake";
export const collection: string = "cakes";

model(modelName, new Schema({
    name: Schema.Types.String,
    description: Schema.Types.String,
    price: Schema.Types.Decimal128,
    stock: Schema.Types.Number,
    ingredients: Schema.Types.Array,
    status: Schema.Types.String
}), collection);
