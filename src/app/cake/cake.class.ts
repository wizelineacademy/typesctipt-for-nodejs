import {CakeInterface, Cake as CakeType} from './cake.model';

export class Cake implements CakeInterface{
	id: number
	name: string
  descrition: string
  ingredients: string[]
  price: number
  stock: number
	status: 'Available'|'LastUnits'|'OutOfStock'
	
	constructor(
		id: number,
		name: string,
		descrition: string,
		ingredients: string[],
		price: number,
		stock: number,
		status: 'Available'|'LastUnits'|'OutOfStock'
	) {
		this.id = id;
		this.name = name;
  	this.descrition = descrition;
		this.ingredients = ingredients
		this.price = price;
		this.stock = stock
		this.status = status;
	}

	newCake(
		id: number,
		newCake: CakeType
	) {
		return {} as CakeType;
	}

	getCakes(){
		return []
	}

	editCake(id: number){
		return {} as CakeType;
	}

	updateCake(id: number, newCakeData: CakeType){
		return {} as CakeType;
	}

	deleteCake(id: number) {
		return
	}
}