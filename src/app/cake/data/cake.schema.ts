import { Schema } from "mongoose";
import { CakeStatus } from "./cake-status.enum";

export const CakeSchema: Schema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    description: {
        type: Schema.Types.String,
        required: true,
        minlength: 50,
        maxlength: 100
    },
    ingredients: {
        type: [{
            type: Schema.Types.String,
            min: 1,
            max: 20
        }],
        // minlength: 3, // Maybe?
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
        required: true,
        type: String,
        enum: [CakeStatus.Available, CakeStatus.LastUnits, CakeStatus.OutOfStock],
        default: CakeStatus.OutOfStock

    }
});