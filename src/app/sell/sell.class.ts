import { ISell } from './sell.interface';
import { Sell as SellType } from './sell.type';
import { Cake } from '../cake/cake.type';
import { SellService } from './sell.service';
import { SellInjection } from '../app.di';
import { dbConn } from '../app.database';

export class Sell implements ISell {
	id: number
  customerName: string
  customerPhoneNumber: string
  customerEmail: string
  totalAmount: number
  cake: Omit<Cake, 'id' | 'stock' | 'status'> & { quantity: number }  
	private sellService: SellService;

	constructor(injtection: SellInjection) {
		this.sellService = injtection?.sellService || new SellService(dbConn)
	}

	

	async newSell(
		newSell: SellType
	) {
		return await this.sellService.makeSell(newSell);
	}

	async getSales(){
		return await this.sellService.getMany();
	}

	async updateSell(id: number, newSellData: SellType){
		return await this.sellService.update(id, newSellData);
	}

	async deleteSell(id: number) {
		return await this.sellService.delete(id);
	}
}