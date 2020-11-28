export interface Sell {
    customerInformation: CustomerInformation,
    totalAmount: number
    cacke: CackeSold;
}

interface CustomerInformation {
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
}

interface CackeSold  {
    name: string
    descrition: string
    ingredients: string[]
    price: number
    quantity: number
}