import { ICake } from './cake.interface';
import { Cake as CakeType } from './cake.type';
import {Status as CakeStatus} from './cake-status.enum';
import { CakeService } from './cake.service';
import { dbConn } from '../app.database';
import { CakeInjection } from '../app.di';

export class Cake implements ICake {
	private cakeService: CakeService;

	id: number
	name: string
  description: string
  ingredients: string[]
  price: number
  stock: number
	status: CakeStatus
	
	constructor(injection: CakeInjection) {
		this.cakeService = injection?.cakeService || new CakeService(dbConn);
	}

	async newCake(		
		newCake: CakeType
	) {
		const result = await this.cakeService.makeCake(newCake);
		return result;
	}

	async getCakes(){
		return await this.cakeService.getMany();
	}

	async updateCake(id: number, newCakeData: CakeType){
		return await this.cakeService.update(id, newCakeData);
	}

	async deleteCake(id: number) {
		return await this.cakeService.delete(id);
	}
}

export const cake = Cake