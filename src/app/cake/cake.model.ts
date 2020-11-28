export interface CakeInterface {
	id: number
	name: string
  descrition: string
  ingredients: string[]
  price: number
  stock: number
  status: 'Available'|'LastUnits'|'OutOfStock'

	newCake(
		id: number,
		newCake: Cake
	): Cake

	getCakes(): Cake[]

	editCake(id: number): Cake

	updateCake(id: number, newCakeData: Cake): Cake

	deleteCake(id: number): void
}

export type Cake = {
  id: number
	name: string
  descrition: string
  ingredients: string[]
  price: number
  stock: number
  status: 'Available'|'LastUnits'|'OutOfStock'
}
