import { Document, Schema } from 'mongoose';
import { ICake } from '../cake/cake.interface';

import { CakeModel } from '../cake/cake.model';
import { ISale } from './sale.interface';

export const SaleSchema = new Schema({
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

SaleSchema.pre<ISale & Document>('save', async function(next) {
    // const model: ICake = this.model('Cake');
    // const cakeModel = new CakeModel(Icak);

    // const cake: ICake = await cakeModel.findById(this.cakeId);

    // if (cake) {
        
    //     if (this.totalAmount > cake.stock) {
    //         return;
    //     }
    
    //     cake.stock -= this.totalAmount;
    
    //     cakeModel.findByIdAndUpdate(this.cakeId, cake);
    // }

    // next();
});