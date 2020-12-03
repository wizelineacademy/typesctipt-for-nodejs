import { Schema } from 'mongoose';

export const modelName: string = 'Sale';
export const collection: string = 'sales';

export const SellSchema = new Schema(
  {
    customerName: { type: Schema.Types.String },
    customerPhoneNumber: { type: Schema.Types.String },
    customerEmail: { type: Schema.Types.String },
    totalAmount: { type: Schema.Types.Number },
    cake: {
      name: { type: Schema.Types.String },
      description: { type: Schema.Types.String },
      ingredients: { type: [Schema.Types.String] },
      price: { type: Schema.Types.Number },
      quantity: { type: Schema.Types.Number },
    },
  },
  { collection, timestamps: true }
);
