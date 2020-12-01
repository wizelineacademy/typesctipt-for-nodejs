import { conn } from '../app.database';
import { Status } from './cake.enums';
import { ICake, ICakeQuery } from "./cake.interface";
import { CakeService } from './cake.service';

export class Cake implements ICake {
    private cakeService: CakeService;

    name: string;
    description: string;
    ingredients: string[];
    price: number;
    stock: number;
    status: Status;

    constructor(values: ICake) {
        this.cakeService = new CakeService(conn);

        this.name = values.name;
        this.description = values.description;
        this.ingredients = values.ingredients;
        this.price = values.price;
        this.stock = values.stock;
        this.status = values.status;
    }

    get values(): ICake {
        return {
            name: this.name,
            description: this.description,
            ingredients: this.ingredients,
            price: this.price,
            stock: this.stock,
            status: this.status
        }
    }

    get(id: string) {
        return this.cakeService.get(id);
    }

    getMany(query: ICakeQuery) {
        return this.cakeService.getMany(query);
    }

    save(): Promise<ICake> {
        return this.cakeService.save(this.values);
    }

    update(id: string) {
        return this.cakeService.update(this.values, id);
    }
}