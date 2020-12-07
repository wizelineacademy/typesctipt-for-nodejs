import { Cake } from './cake.type';
import { Status } from './cake-status.enum';

export interface ICake {
	id: number
	name: string
  description: string
  ingredients: string[]
  price: number
  stock: number
  status: Status

	newCake(		
		newCake: Cake
	): Promise<Cake>

	getCakes(): Promise<Cake[]>

	updateCake(id: number, newCakeData: Cake): Promise<Cake>

	deleteCake(id: number): void
}