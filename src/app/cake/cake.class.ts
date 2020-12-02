import { ICake } from './cake.interface';
import { Cake as CakeType } from './cake.type';
import {Status as CakeStatus} from './cake-status.enum';
import { CakeService } from './cake.service.v2';
import { dbConn } from '../app.database'

export class Cake implements ICake {
	private cakeService: CakeService;

	id: number
	name: string
  descrition: string
  ingredients: string[]
  price: number
  stock: number
	status: CakeStatus
	
	constructor(cake: CakeType) {
		this.cakeService = new CakeService(dbConn);

		this.id = cake.id;
		this.name = cake.name;
  	this.descrition = cake.descrition;
		this.ingredients = cake.ingredients
		this.price = cake.price;
		this.stock = cake.stock
		this.status = cake.status;
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