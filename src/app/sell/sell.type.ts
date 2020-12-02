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