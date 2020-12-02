import { Sell } from './sell.type';
import { Cake } from '../cake/cake.type';

export interface ISell {
  id: number
  customerName: string
  customerPhoneNumber: string
  customerEmail: string
  totalAmount: number
  cake: Omit<Cake, 'id' | 'stock' | 'status'> & { quantity: number }  
  // cake: {
  //   name: string
  //   descrition: string
  //   ingredients: string[]
  //   price: number
  //   quantity: number
  // }

  newSell(
		id: number,
		newSell: Sell
	): Sell

	getSales(): Sell[]

	editSell(id: number): Sell

	updateSell(id: number, newSellData: Sell): Sell

	deleteSell(id: number): void
}