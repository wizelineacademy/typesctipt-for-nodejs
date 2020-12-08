import { model, Schema, SchemaTypes } from "mongoose";

export const modelName = 'Sale'
export const collection = 'sales'

model(modelName, new Schema({

    customerName: SchemaTypes.String,
    customerPhoneNumber: SchemaTypes.String,
    customerEmail: SchemaTypes.String,
    totalAmount: SchemaTypes.Number,
    cakeId: { type: SchemaTypes.ObjectId, ref: 'Cake' },
    quantity: SchemaTypes.Number

}, { versionKey: false }))