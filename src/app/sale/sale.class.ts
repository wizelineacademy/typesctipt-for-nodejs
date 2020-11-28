


export interface CakeSold{
    name: string
    descrition: string
    ingredients: string[]
    price: number
    quantity: number
  }

export interface Sale{
    id?: number;
    customerName: string
    customerPhoneNumber?: string
    customerEmail?: string
    totalAmount?: number
    cake?: CakeSold
  }