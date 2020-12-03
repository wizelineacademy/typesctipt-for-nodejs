import { Schema, model } from 'mongoose';
import { ISale } from './sale.interface';
import { CakeSchema } from '../cake/cake.model';

export const SaleSchema: Schema = new Schema({
  customerName: { type: String, required: true, minlength: 3, maxlength: 50 },
  customerPhoneNumber: {
    type: String,
    required: true,
    minlength: 10,
    match: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
  },
  customerEmail: {
    type: String,
    minlength: 5,
    maxlength: 1000,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  totalAmount: { type: Number, required: true },
  cake: { type: CakeSchema, required: true }
});

export default model<ISale>('Sale', SaleSchema);
