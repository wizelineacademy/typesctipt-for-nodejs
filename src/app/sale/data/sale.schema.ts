import { Schema } from "mongoose";
import { BadRequestException } from "../../../component/http-exceptions";
import { CakeService } from "../../cake/cake.service";
import { CakeStatus } from "../../cake/data/cake-status.enum";
import { Sale } from "./sale.model";


export const SaleSchema: Schema =  new Schema({
    customerName: {
        type: Schema.Types.String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    customerPhoneNumber: {
        type: Schema.Types.String,
        required: true,
        minlength: 10,
        match: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    },
    customerEmail: {
        type: Schema.Types.String,
        minlength: 5,
        maxlength: 100,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    totalAmount: {
        type: Schema.Types.Number,
        required: true,
        min: 1
    },
    cakeId: {
        type: Schema.Types.ObjectId,
        ref: 'Cake',
        required: true
    }
});

SaleSchema.pre<Sale>("save",async function(next){
    // const cakeService = new CakeService();
    // const cake = await cakeService.getById(this.cakeId)
    // cake.stock = cake.stock - this.totalAmount;
    // if(cake.stock < 0) throw new BadRequestException("Not enough cakes");
    // if(cake.stock > 10){
    //     cake.status = CakeStatus.Available;
    // }else if(cake.stock === 0){
    //     cake.status = CakeStatus.OutOfStock;
    // }else{
    //     cake.status = CakeStatus.LastUnits;
    // }

    // cakeService.put(cake.id, cake);
})