import mongoose, { Schema } from "mongoose"
import CakeService from "../../app/cake/cake.service";
import { ISale } from '../interface/sale.interface'

const SaleSchema: Schema = new Schema ({
    customerName: {
        type: String,
        required: true
    },
    customerPhoneNumber: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String
    },
    cakeId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

SaleSchema.pre<ISale>("save", async function(next) {
    let CakeToSell = await CakeService.GetCake(this.cakeId)
    let err: Error;
    let regexp: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if ((CakeToSell.stock - this.quantity) < 0){
        err = new Error("Not enough cakes to sell")
    }
    if (this.customerName.length < 3 || this.customerName.length > 50){
        err = new Error("Name validation failed. Name should be between 3 and 50 characters")
    }
    if (this.customerPhoneNumber.length < 10 || !/^\d+$/.test(this.customerPhoneNumber)){
        err = new Error("Phone number validation failed. Phone should be at least 10 chars and only numbers")
    }
    if (this.customerEmail.length < 5 || this.customerEmail.length > 100){
        err = new Error("Email validation failed. Email should be between 5 and 100 characters")
    }
    if (this.customerEmail.length < 5 || this.customerEmail.length > 100){
        err = new Error("Email validation failed. Email should be between 5 and 100 characters")
    }
    if(!regexp.test(this.customerEmail)){
        err = new Error("Email validation failed. Email format not valid")
    }
    if(this.quantity < 1){
        err = new Error("Quantity should be greater than one")
    }
    next(err)
})

SaleSchema.post<ISale>("save", async function(next){
    let CakeToSell = await CakeService.GetCake(this.cakeId)
    CakeToSell.stock = CakeToSell.stock - this.quantity
    await CakeService.EditCake(this.cakeId, CakeToSell).then((data) => {
        return data
    }).catch((error: Error) => {
        next(error)
    })
})

export default mongoose.model<ISale>('Sale', SaleSchema)