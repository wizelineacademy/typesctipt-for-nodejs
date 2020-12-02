import { ISell } from './sell.interface';
import { Sell as SellType } from './sell.type';
import { Cake } from '../cake/cake.type';

export class Sell implements ISell {
	id: number
  customerName: string
  customerPhoneNumber: string
  customerEmail: string
  totalAmount: number
  cake: Omit<Cake, 'id' | 'stock' | 'status'> & { quantity: number }  
	

	constructor(
		id: number,
		customerName: string,
		customerPhoneNumber: string,
		customerEmail: string,
		totalAmount: number,		
	) {
		this.id = id;
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.customerPhoneNumber = customerPhoneNumber;
		this.totalAmount = totalAmount;
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