import {
    validateLength,
    validateMinValue
} from '../../utils'
import { dbConn } from '../app.database';
import { ICake } from './cake.interface';
import { Status } from './cake.enums';
import { CakeService } from './cake.service';

export type CakeInjection = {
    cakeService?: CakeService;
}

export class Cake implements ICake {
    private cakeService: CakeService;

    name!: string;
    description!: string;
    ingredients!: string[];
    price!: number;
    stock!: number;
    status!: Status;

    constructor(values: ICake, injection?: CakeInjection) {
        this.setValues(values);
        this.cakeService = injection?.cakeService || new CakeService(dbConn);
    }

    get getValues(): ICake {
        return {
            name: this.name,
            description: this.description,
            ingredients: this.ingredients,
            price: this.price,
            stock: this.stock,
            status: this.status
        };
    }

    set values(values: ICake) {
        if (values) {
            this.setValues(values);
        }
    }

    private setStatus(stock: number): Status {
        if (stock > 10) {
            return Status.AVAILABLE;
        } else if (stock === 0) {
            return Status.OUT_OF_STOCK;
        } else {
            return Status.LAST_UNITS;
        }
    }

    private setValues(values: ICake) {
        this.name = values.name;
        this.description = values.description;
        this.ingredients = values.ingredients;
        this.price = values.price;
        this.stock = values.stock;
        this.status = this.setStatus(values.stock);
    }

    public async save() {
        this.validateFields();
        return this.cakeService.save(this.getValues);
    }

    public async update(id?: string) {
        return this.cakeService.update(this.getValues, id);
    }

    public validateName(): boolean {
        const minLength: number = 5;
        const maxLength: number = 50;

        return validateLength('name', this.name, minLength, maxLength)
    }

    public validateDescription(): boolean {
        const minLength: number = 50;
        const maxLength: number = 1000;

        return validateLength('description', this.description, minLength, maxLength);
    }

    public validatePrice(): boolean {
        const minPrice: number = 1;

        return validateMinValue('price', this.price, minPrice);
    }

    public validateStock(): boolean {
        const minStock: number = 0;

        return validateMinValue('stock', this.stock, minStock);
    }

    public validateFields(): void {
        this.validateName();
        this.validateDescription();
        this.validatePrice();
        this.validateStock();
    }
}