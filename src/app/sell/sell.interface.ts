import { Sell } from './sell.type';
import { Cake } from '../cake/cake.type';

export interface ISell {
  id: number
  customerName: string
  customerPhoneNumber: string
  customerEmail: string
  totalAmount: number
  cake: Omit<Cake, 'id' | 'stock' | 'status'> & { quantity: number }  

  newSell(		
		newSell: Sell
	): Promise<Sell>

	getSales(): Promise<Sell[]>

	updateSell(id: number, newSellData: Sell): Promise<Sell>

	deleteSell(id: number): void
}