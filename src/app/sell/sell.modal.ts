export type Sell = {
  id: number
  customerName: string
  customerPhoneNumber: string
  customerEmail: string
  totalAmount: number
  cake: {
    name: string
    descrition: string
    ingredients: string[]
    price: number
    quantity: number
  }
}

export interface SellInterface {
  id: number
  customerName: string
  customerPhoneNumber: string
  customerEmail: string
  totalAmount: number
  cake: {
    name: string
    descrition: string
    ingredients: string[]
    price: number
    quantity: number
  }

  newSell(
		id: number,
		newSell: Sell
	): Sell

	getSales(): Sell[]

	editSell(id: number): Sell

	updateSell(id: number, newSellData: Sell): Sell

	deleteSell(id: number): void
}