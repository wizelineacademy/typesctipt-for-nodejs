import { BadRequestException } from "../../component/http-exceptions";
import { ValidatorHelper } from "../../component/validator/validator";
import { CakeStatus } from "./data/cake-status.enum";
import { Cake } from "./data/cake.model";
import { singleton} from "tsyringe";


@singleton()
export class CakeValidator{

    constructor(private helper: ValidatorHelper){

    }

    execute(value: Partial<Cake>){
        this.helper.executeValidateMethods(this,value);
    }

    validateName({name}:Partial<Cake>){
        const label = "Name";
        this.helper.required(name,label);
        this.helper.minLength(name,5,label);
        this.helper.maxLength(name,50,label);
    }
    validateDescription({description}:Partial<Cake>){
        const label = "Description";
        this.helper.required(description,label);
        this.helper.minLength(description,50,label);
        this.helper.maxLength(description,100,label);
    }

    validateIngredients({ingredients}: Partial<Cake>){
        const label = "Ingredients";
        this.helper.required(ingredients,label);
        this.helper.minArrayLength(ingredients,3,label);
    }

    validatePrice({price}: Partial<Cake>){
        const label = "Price";
        this.helper.required(price,label);
        this.helper.min(price,1,label);
    }
    validateStock({stock}: Partial<Cake>){
        const label = "Stock";
        this.helper.required(stock,label);
        this.helper.min(stock,0,label);
    }
    validateStatus(value: Cake){
        if(value.stock > 10){
            value.status = CakeStatus.Available;
        }else if(value.stock === 0){
            value.status = CakeStatus.OutOfStock;
        }else{
            value.status = CakeStatus.LastUnits;
        }
    }
}