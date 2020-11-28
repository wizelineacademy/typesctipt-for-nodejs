export class ingredient {
    name: string;
    quantity: number;
    constructor(name:string, quantity: number){
        this.name = this.setName(name)
        this.quantity = this.setQuantity(quantity)
    }
    setName(name:string){
        let regexpName = new RegExp('[a-zA-Z]{1,20}');
        if (regexpName.test(name)){
            return name
        } else {
            throw new Error("Name doesn't match constraints")
        }
    }
    setQuantity(quantity: number){
        if(quantity < 0){
            throw new Error("Quantity must be greater than cero")
        }
        return quantity
    }
}