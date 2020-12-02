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

SaleSchema.pre<ICake & Document & ISale>('save', async function(next) {
    const model = this.model('Cake');
    const cake = <ICake | null> await model.findById(this.cakeId);

    if (!cake) {
        return;
    }

    if (this.totalAmount > cake.stock) {
        return;
    }

    cake.stock -= this.totalAmount;

    await model.findByIdAndUpdate(this.cakeId, cake);

    next();
});