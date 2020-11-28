export interface CakeInterface {
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number
}

export class Cake implements CakeInterface {

    name: string
    description: string
    ingredients: string[]
    price: number
    stock: number
    // status?: 'Available' | 'LastUnits' | 'OutOfStock'


    constructor(entity: CakeInterface) {
        this.name = entity.name
        this.description = entity.description
        this.ingredients = entity.ingredients
        this.price = entity.price
        this.stock = entity.stock
        // this.status = status
    }

}

