import { Schema, Document } from 'mongoose';

import { Status } from './cake.enums';
import { ICake } from './cake.interface';

export const CakeModel = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
        minlengthl: 5,
        maxlength: 50
    },
    description: {
        type: Schema.Types.String,
        required: true,
        minlength: 50,
        maxlength: 1000
    },
    ingredients: {
        type: [{
            type: Schema.Types.String,
            min: 1,
            max: 20
        }],
        required: true,
    },
    price: {
        type: Schema.Types.Number,
        required: true,
        min: 1
    },
    stock: {
        type: Schema.Types.Number,
        required: true,
        min: 0
    },
    status: {
        type: Schema.Types.String,
        enum: [Status.AVAILABLE, Status.LAST_UNITS, Status.OUT_OF_STOCK]
    }
});

CakeModel.pre<ICake & Document>('save', function(next) {
    let status: Status;
    const { stock } = this;
    
    if (stock > 10) {
        status = Status.AVAILABLE;
    } else if (stock === 0) {
        status = Status.OUT_OF_STOCK;
    } else {
        status = Status.LAST_UNITS;
    }

    this.status = status;

    next();
});