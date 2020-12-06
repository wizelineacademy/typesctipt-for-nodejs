
import {injectable} from "tsyringe";
import { BadRequestException } from "../http-exceptions";


/**
 * Catalog of common value validations
 */
@injectable()
export class ValidatorHelper{

    executeValidateMethods(validator: any, value: any){
        let validatorClassKeys = Object.getPrototypeOf(validator);
        for(let attr of Object.getOwnPropertyNames(validatorClassKeys)){
            if(attr.startsWith('validate') && typeof validator[attr] === 'function'){
                validator[attr](value);
            }
        }
    }

    required(field: any,label: string){
        if(typeof field === 'undefined'){
            throw new BadRequestException(`${label} is required`);
        }
    }

    minLength(field: string | undefined, length: number, label: string){
        if(length <= 0){
            throw Error("minLength should be greater than zero")
        }
        if(field && field.length < length){
            throw new BadRequestException(`${label} length should at least ${length} characters long`);
        }
    }
    maxLength(field: string| undefined, length: number, label: string){
        if(length <= 0){
            throw Error("maxLength should be greater than zero")
        }
        if(field && field.length > length){
            throw new BadRequestException(`${label} maximun length is ${length} characters`);
        }
    }

    min(field: number | undefined, min: number, label: string){
        if(field && field < min){
            throw new BadRequestException(`${label} must be greter than ${min}`);
        }
    }

    minArrayLength(field: any[] | undefined, min: number, label: string){
        if(min <= 0){
            throw Error("minArrayLength should be greater than zero")
        }
        if(field && field.length < min){
            throw new BadRequestException(`${label} must be have at least ${min} items`);
        }
    }
    pattern(field: string | undefined, pattern: {label: string, regex: RegExp}, label: string){
        if(field && !pattern.regex.test(field)){
            throw new BadRequestException(`${label} is not valid ${pattern.label}`);
        }
    }
}