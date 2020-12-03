import { Document } from 'mongoose';
import { Status } from './status.enum';

export interface ICake extends Document {
  _id?: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  quantity: number;
  status: Status;
}
