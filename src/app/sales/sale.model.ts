import { model, Schema, SchemaType } from "mongoose";

export const modelName: string = 'Sale';
export const collection: string = 'sales';

model(modelName, new Schema({
    customerName: Schema.Types.String,
    customerPhoneNumber: Schema.Types.String,
    customerEmail: Schema.Types.String,
    totalAmount: Schema.Types.Number,
    cake: {
        name: Schema.Types.String,
        descrition: Schema.Types.String,
        ingredients: [Schema.Types.String],
        price: Schema.Types.Number,
        quantity: Schema.Types.Number
    }
}), collection);