import { Document } from 'mongoose';
import { ICake } from '../cake/cake.interface';

export interface ISale extends Document {
  _id?: string;
  customerName: string;
  customerPhoneNumber: string;
  customerEmail?: string;
  totalAmount: number;
  cake: ICake;
}
