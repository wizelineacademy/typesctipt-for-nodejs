import {SellInterface, Sell as SellType} from './sell.modal';

export class Sell implements SellInterface{
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
		this.ingredients = ingredients;
		this.price = price;
		this.stock = stock;
		this.status = status;
	}

	newSell(
		id: number,
		newSell: SellType
	) {
		return {} as SellType;
	}

	getSales(){
		return []
	}

	editSell(id: number){
		return {} as SellType;
	}

	updateSell(id: number, newSellData: SellType){
		return {} as SellType;
	}

	deleteSell(id: number) {
		return
	}
}