import { ObjectId } from 'mongoose';
import { CakeStatus } from './cake.enum';
export interface ICake {
  _id?: string
  name: string
  description: string
  ingredients: string[]
  price: number
  stock: number
  status: CakeStatus
}