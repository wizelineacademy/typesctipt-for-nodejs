import { model, Schema } from 'mongoose';

export const modelName: string = 'Sale';
export const collection: string = 'sales';

model(modelName, new Schema({
    customerName: Schema.Types.String,
    customerPhoneNumber: Schema.Types.String,
    customerEmail: Schema.Types.String,
    totalAmount: Schema.Types.Number,
    cakeId: Schema.Types.ObjectId
}), collection);