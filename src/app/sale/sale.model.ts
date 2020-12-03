import { Schema, model } from 'mongoose';
import { ISale } from './sale.interface';
import { CakeSchema } from '../cake/cake.model';

export const SaleSchema: Schema = new Schema({
  customerName: { type: String, required: true },
  customerPhoneNumber: { type: String, required: true },
  customerEmail: { type: String },
  totalAmount: { type: Number, required: true },
  cake: { type: CakeSchema, required: true }
});

export default model<ISale>('Sale', SaleSchema);
