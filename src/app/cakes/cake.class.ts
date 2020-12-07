import { db as dbMain } from "../app.database"
import { ICake } from "./cake.interface"
import { CakeService } from "./cake.service"

export type CakeInjection = {
    cakeService?: CakeService
}

export class Cake implements ICake {

    private cakeService: CakeService

    name?: string
    description?: string
    ingredients?: string[]
    price?: number
    stock?: number
    // status?: 'Available' | 'LastUnits' | 'OutOfStock'

    constructor(values?: ICake, injection?: CakeInjection) {

        this.setValues(values)
        this.cakeService = injection?.cakeService || new CakeService(dbMain);
    }

    get values(): ICake {
        return {
            name: this.name,
            description: this.description,
            ingredients: this.ingredients,
            price: this.price,
            stock: this.stock
        }
    }

    set values(values: ICake) {
        this.setValues(values)
    }

    private setValues(values?: ICake) {
        if (values) {
            this.name = values.name
            this.description = values.description
            this.ingredients = values.ingredients
            this.price = values.price
            this.stock = values.stock
        }
    }

    public async save() {
        this.validateName()
        this.validateDescription()
        this.validateIngredients()
        this.validateStock()
        this.validatePrice()

        let cake = await this.cakeService.save(this.values);

        return cake;
    }

    public async update(id?: string) {
        this.validateName()
        this.validateDescription()
        this.validateIngredients()
        this.validateStock()
        this.validatePrice()

        let cake = await this.cakeService.update(id, this.values);

        return cake;
    }

    public async delete(id?: string) {

        let cake = await this.cakeService.delete(id);

        return cake;
    }

    public validateName(): Boolean {
        const minLength: number = 3
        const maxLength: number = 50

        if (!this.name) {
            throw new Error('Cake name cannot be empty.')
        } else {
            if (this.name?.length < minLength) {
                throw new Error(`Name cannot have less than ${minLength} characters.`)
            }
            if (this.name?.length > maxLength) {
                throw new Error(`Name cannot have more than ${maxLength} characters.`)
            }
        }

        return true;
    }

    public validateDescription(): Boolean {
        const minLength: number = 50
        const maxLength: number = 1000

        if (!this.description) {
            throw new Error('Cake description cannot be empty.')
        } else {
            if (this.description?.length < minLength) {
                throw new Error(`Cake description cannot have less than ${minLength} characters.`)
            }
            if (this.description?.length > maxLength) {
                throw new Error(`Cake description cannot have more than ${maxLength} characters.`)
            }
        }

        return true;
    }

    public validateIngredients(): Boolean {


        const minIngredients = 3
        const minIngredientLenght = 1
        const maxIngredientLenght = 20


        if (!this.ingredients) {
        } else {
            if (this.ingredients.length < minIngredients) {
                throw new Error(`Cake must have ${minIngredients} or more ingredients.`)
            }
            this.ingredients.forEach(ingredient => {
                if (ingredient.length < minIngredientLenght) {
                    throw new Error(`Cake ingredient ${ingredient} must have ${minIngredientLenght} or more characters.`)
                }
                if (ingredient.length > maxIngredientLenght) {
                    throw new Error(`Cake ingredient ${ingredient} must have less than ${maxIngredientLenght} characters.`)
                }
            });
        }
        return true
    }

    public validatePrice(): Boolean {

        const minPrice = 0

        if (this.price == undefined) {
            throw new Error('Cake price cannot be empty.')
        } else {
            if (!(this.price > minPrice)) {
                throw new Error(`Cake price must be greater than ${minPrice}.`)
            }
        }
        return true
    }


    public validateStock(): Boolean {

        const minStock = -1

        if (this.stock == undefined) {
            throw new Error('Cake stock cannot be empty.')
        } else {
            if (!(this.stock > minStock)) {
                throw new Error(`Cake stock must be greater than ${minStock}.`)
            }
        }
        return true
    }



}

