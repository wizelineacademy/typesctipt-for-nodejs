
export enum CakeStatus {
  Available = "AVAILABLE",
  LastUnits = "LASTUNITS",
  OutOfStock = "OUTOFSTOCK"
} 

export interface Cake { }

export class CarrotCake implements Cake{ 
  name: string
  descrition: string
  ingredients: string[]
  price: number
  stock: number
  status: CakeStatus
  
  // Constructor
  constructor(name: string,descrition: string,ingredients: string[],price: number,stock: number,status: CakeStatus,) {
    this.name = name;
    this.descrition = descrition;
    this.ingredients = ingredients;
    this.price = price;
    this.stock = stock;
  }
}