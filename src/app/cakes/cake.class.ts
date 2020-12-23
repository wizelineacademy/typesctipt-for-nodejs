import { dbMain } from "../app.database";
import { ICake } from "./cake.interface";
import { CakeService } from "./cake.service";
import { StatusCake } from "../cakes/statusCake.enum";

export type CakeInjection = {
    cakeService?: CakeService;
}

export class Cake implements ICake{
    private cakeService: CakeService;
    _id: string;
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    stock: number;
    status: string;

    constructor( values?: ICake, injection?: CakeInjection ){
        this.setValues(values);
        this.cakeService = injection?.cakeService || new CakeService(dbMain); //Q&A
    }
    
    get values(): ICake {
        return {
            name: this.name,
            description: this.description,
            ingredients: this.ingredients,
            price: this.price,
            stock: this.stock,
            status: this.status,
        }
    }

    set values(values : ICake){
        this.setValues(values);
    }

    private setValues(values: ICake) {
        if (values) {
            this._id = values._id;
            this.name = values.name;
            this.description = values.description;
            this.ingredients = values.ingredients;
            this.price = values.price;
            this.stock = values.stock;
            this.status = values.status;
        }
    }

    public async save(){
        this.validateName();
        this.validateDescription();
        this.validateIngredients();
        this.validatePrice();
        this.validateStock();
        this.setStatus();
        this._id = await this.cakeService.createCake(this.values);
        return this._id;
    }

    public async update(id: string): Promise<string>{
        this.validateName();
        this.validateDescription();
        this.validateIngredients();
        this.validatePrice();
        this.validateStock();
        this.setStatus();
        const cakeIdUpdated: string = await this.cakeService.updateCake(id, this.values);
        return cakeIdUpdated;
      
    }

    public async subtractStock(amountSale: number): Promise<Boolean>{
        this.stock = this.stock - amountSale;
        await this.update(this._id);
        return true;
    }

    public async getCake(id: string){
        const cakeInstance: ICake = await this.cakeService.getCakeInstance(id);
        return cakeInstance;
    }

    public getCakeDetails(){
        this.setStatus();
        return {
            _id: this._id,
            name: this.name,
            description: this.description,
            ingredients: this.ingredients,
            price: this.price,
            stock: this.stock,
            status: this.status,
        }
    } 

    public exists(): Boolean {
        if(this._id !== null || undefined){
            return true;
        }
        return false;
    }

    public isEnoughStock(amount: number): Boolean {
        if(amount > this.stock){
            return false;
        }
        return true;
    }

    public validateName(): Boolean {
        const minLength: number = 5;
        const maxLength: number = 50;
        const hasNoValue: boolean = this.name == null || undefined;
        const minLengthInvalid: boolean = this.name?.length < minLength;
        const maxLengthInvalid: boolean = this.name?.length > maxLength;

        if(hasNoValue){
            throw new Error('Name cannot be empty');
        }

        if(minLengthInvalid){
            throw new Error(`Name cannot have less than ${minLength} characters.`);
        }

        if(maxLengthInvalid){
            throw new Error(`Name cannot have more than ${maxLength} characters.`);
        }
        return true;
    }

    public validateDescription(): Boolean {
        const minLength: number = 50;
        const maxLength: number = 1000;
        const hasNoValue: boolean = this.description == null || undefined;
        const minLengthInvalid: boolean = this.description?.length < minLength;
        const maxLengthInvalid: boolean = this.description?.length > maxLength;

        if(hasNoValue){
            throw new Error('Description cannot be empty');
        }

        if(minLengthInvalid){
            throw new Error(`Description cannot have less than ${minLength} characters.`);
        }

        if(maxLengthInvalid){
            throw new Error(`Description cannot have more than ${maxLength} characters.`);
        }
        return true;
    }

    public validateIngredients(): Boolean {
        const minLength: number = 3;
        const hasNoValue: boolean = this.ingredients == null || undefined;
        const minLengthInvalid: boolean = this.ingredients?.length < minLength;

        if(hasNoValue){
            throw new Error('Ingredients cannot be empty');
        }

        if(minLengthInvalid){
            throw new Error(`Ingredients cannot have less than ${minLength} items.`);
        }

        this.validateItemsIngredients(this.ingredients);

        return true;
    }


    private validateItemsIngredients(ingredients: string[]): Boolean{
        const minLength: number = 1;
        const maxLength: number = 20;
        
        ingredients.forEach(item => {
            let minLengthInvalid: boolean = item.length < minLength;
            let maxLengthInvalid: boolean = item.length > maxLength;

            if(minLengthInvalid){
                throw new Error(`The ingredient: ${item} has not the minimum of characters`)
            }

            if(maxLengthInvalid){
                throw new Error(`The ingredient: ${item} has not the maximum of characters`)
            }
        });

        return true;
    }

    public validatePrice(): Boolean {
        const minValue: number = 0;
        const hasNoValue: boolean = this.price == null || undefined;
        const minValueInvalid: boolean = this.price < minValue;

        if(hasNoValue){
            throw new Error('Price cannot be empty');
        }

        if(minValueInvalid){
            throw new Error(`Price cannot be less than ${minValue}.`);
        }

        return true;
    }

    public validateStock(): Boolean {
        const minValue: number = -1;
        const hasNoValue: boolean = this.stock == null || undefined;
        const minValueInvalid: boolean = this.stock < minValue;

        if(hasNoValue){
            throw new Error('Stock cannot be empty');
        }

        if(minValueInvalid){
            throw new Error(`Stock cannot be less than ${minValue}.`);
        }

        return true;
    }

    public setStatus() {
        if(this.stock == 0){
            this.status = StatusCake.OutOfStock;
        }

        if(this.stock >= 10){
            this.status = StatusCake.Available;
        }

        if(this.stock < 10){
            this.status = StatusCake.LastUnits;
        }
    }    

}
