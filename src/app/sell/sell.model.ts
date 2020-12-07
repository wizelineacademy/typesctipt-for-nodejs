import { Schema } from 'mongoose';

export const SellSchema = new Schema(
  {
    customerName: {
      type: String,
    },
    customerPhoneNumber: {
      type: String,
    },
    customerEmail: {
      type: String,
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    cake: {
      type: Schema.Types.ObjectId,
      ref: 'Cake',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const modelName: string = 'Sales';
