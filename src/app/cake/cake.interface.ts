import { Cake } from './cake.type';
import { Status } from './cake-status.enum';

export interface ICake {
	id: number
	name: string
  descrition: string
  ingredients: string[]
  price: number
  stock: number
  status: Status

	newCake(
		id: number,
		newCake: Cake
	): Cake

	getCakes(): Cake[]

	editCake(id: number): Cake

	updateCake(id: number, newCakeData: Cake): Cake

	deleteCake(id: number): void
}