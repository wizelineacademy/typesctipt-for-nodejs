import { singleton } from "tsyringe";
import { BadRequestException } from "../../component/http-exceptions";
import { CommonRegex } from "../../component/validator/common.regex";
import { ValidatorHelper } from "../../component/validator/validator";
import { Sale } from "./data/sale.model";

@singleton()
export class SaleValidator{
    constructor(private helper: ValidatorHelper){

    }

    execute(value: Partial<Sale>){
        this.helper.executeValidateMethods(this,value);
    }

    validateCustomerName({customerName}: Partial<Sale>){
        const label = "Customer name";
        this.helper.required(customerName,label);
        this.helper.minLength(customerName,3,label);
        this.helper.maxLength(customerName,50,label);
    }
    validateCustomerPhone({customerPhoneNumber}: Partial<Sale>){
        const label = "Customer phone";
        this.helper.required(customerPhoneNumber,label);
        this.helper.pattern(customerPhoneNumber,CommonRegex.phone,label);
    }
    validateCustomerEmail({customerEmail}: Partial<Sale>){
        const label = "Customer email";
        this.helper.required(customerEmail,label);
        this.helper.pattern(customerEmail,CommonRegex.email,label);
    }

    validateTotalAmount({totalAmount}: Partial<Sale>){
        const label = "Total amount";
        this.helper.required(totalAmount,label);
        this.helper.min(totalAmount,1,label);
    }
    validateCakeId({cakeId}: Partial<Sale>){
        const label = "Cake id";
        this.helper.required(cakeId,label);
    }
}