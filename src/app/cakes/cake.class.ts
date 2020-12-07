import { db } from '../app.database';
import { ICake } from './cake.interface';
import { CakeStatus } from './cake-status.enum';
import { CakeService } from './cake.service';
import { IDBModel } from '../db-model.interface';

export type CakeInjection = {
    cakeService?: CakeService;
}

export class Cake implements ICake, IDBModel {
    private cakeService: CakeService;

    _id: string;
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    stock: number;
    status: CakeStatus;

    constructor(model?: ICake, injection?: CakeInjection) {
        this.setCake(model);
        this.cakeService = injection?.cakeService || new CakeService(db);
    }

    get _cake(): ICake {
        return {
            name: this.name,
            description: this.description,
            ingredients: this.ingredients,
            price: this.price,
            stock: this.stock,
            status: this.status
        } as ICake;
    }

    set _cake(values: ICake) {
        this.setCake(values);
    } 

    private setCake(values?: ICake) {
        if(values) {
            this.name = values.name;
            this.description = values.description;
            this.ingredients = values.ingredients;
            this.price = values.price;
            this.stock = values.stock;
        }
    }

    calculateStatus = (stock: number) => {
        let _status: CakeStatus = CakeStatus.OutOfStock;
        if(stock > 10) {
            _status = CakeStatus.Available;
        } else if(stock > 0) {
            _status = CakeStatus.LastUnits;
        }
        return _status as CakeStatus;
    }

    validate(): boolean {
        // prop: name
        // rules: required, 5 char min, 50 char max
        if(!this.name) {
            this.throwValidationError('name', 'Is required');
        }
        if(this.name.length < 5 || this.name.length > 50) {
            this.throwValidationError('name', 'Should be between 5 and 50 characters');
        }

        // prop: description
        // rules: required, 50 char min, 1000 char max
        if(!this.description) {
            this.throwValidationError('description', 'Is required');
        }
        if(this.description.length < 50 || this.description.length > 1000) {
            this.throwValidationError('description', 'Should be between 50 and 1000 characters');
        }

        // prop: ingredients
        // rules: required, at least 3 ingredients, (1 char min, 20 char max per ingredient)
        if(!this.ingredients) {
            this.throwValidationError('ingredients', 'Is required');
        }
        if(this.ingredients.length < 3) {
            this.throwValidationError('ingredients', 'Should include at least 3 ingredients');
        }
        if(this.ingredients.filter(i => i.length < 1 || i.length > 20).length) {
            this.throwValidationError('ingredient', 'Should be between 1 and 20 characters');
        }

        // prop: price
        // rules: required, greater than 0
        if(this.price === null || this.price === undefined) {
            this.throwValidationError('price', 'Is required');
        }
        if(typeof this.price !== 'number') {
            this.throwValidationError('price', 'Invalid format');
        }
        if(this.price < 0) {
            this.throwValidationError('price', 'Should be greater than 0');
        }

        // prop: stock
        // rules: required, greater than -1
        if(this.stock === null || this.stock === undefined) {
            this.throwValidationError('stock', 'Is required');
        }
        if(typeof this.stock !== 'number') {
            this.throwValidationError('stock', 'Invalid format');
        }
        if(this.stock < -1) {
            this.throwValidationError('stock', 'Should be greater than -1');
        }
        return true;
    }

    throwValidationError(property: string, message: string) {
        throw new Error(`Cake.${property} - ${message}`)
    }

    save(): Promise<ICake> {
        this.validate();
        return this.cakeService.save(this._cake);
    }
    get(): Promise<ICake[]> {
        return this.cakeService.getAll().then(res => {
            return res.map(c => {
                return {...c, status: this.calculateStatus(c.stock)};
            });
        });
    }
    getById(id: string): Promise<ICake> {
        return this.cakeService.get(id).then((c: ICake) => ({...c, status: this.calculateStatus(c.stock)}));
    }
    remove(id: string): Promise<ICake> {
        return this.cakeService.delete(id);
    }
    patch(id: string, model: ICake): Promise<ICake> {
        this.setCake(model);
        this.validate()
        return this.cakeService.update(id, this._cake);
    }
}