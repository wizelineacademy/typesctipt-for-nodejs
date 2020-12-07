import { db as dbMain } from "../app.database"
import { ICake } from "./cake.interface"
import { CakeService } from "./cake.service"

export type CakeInjection = {
    cakeService?: CakeService;
}

export class Cake implements ICake {

    private cakeService: CakeService

    name?: string
    description?: string
    ingredients?: string
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
            this.name = values.name;
            this.description = values.description
            this.ingredients = values.ingredients
            this.price = values.price
            this.stock = values.stock
        }
    }

    public async save() {
        this.validateName();

        let testCake: ICake = {
            name: 'Red Velvet',
            description: 'Vanilla and Strawberry',
            ingredients: 'vanilla',
            price: 20,
            stock: 100
        };
        // let cake = await this.cakeService.save(testCake);
        let cake = await this.cakeService.save(this.values);

        // console.log(this.values);

        return cake;
    }

    public validateName(): Boolean {
        const minLength: number = 3;
        const maxLength: number = 50;

        if (!this.name) {
            throw new Error('Name cannot be empty.');
        } else {
            if (this.name?.length < minLength) {
                throw new Error(`Name cannot have less than ${minLength} characters.`);
            }
            if (this.name?.length > maxLength) {
                throw new Error(`Name cannot have more than ${maxLength} characters.`);
            }
        }

        return true;
    }
}

