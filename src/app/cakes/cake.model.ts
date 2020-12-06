import { model, Schema } from "mongoose";
import { CakeStatus } from "./cake-status.enum";

export const modelName: string = 'Cake';
export const collection: string = 'cakes';

const cakeSchema = new Schema({
    name: Schema.Types.String,
    descrition: Schema.Types.String,
    ingredients: [Schema.Types.String],
    price: Schema.Types.Number,
    stock: Schema.Types.Number,
    //status: {type: Schema.Types.String, enum: [CakeStatus.Available, CakeStatus.LastUnits, CakeStatus.OutOfStock] }
});

// cakeSchema.methods.getStatus = function() {
//     let _status: CakeStatus = CakeStatus.OutOfStock;
//     if(this.stock > 10) {
//         _status = CakeStatus.Available;
//     } else if(this.stock > 0) {
//         _status = CakeStatus.LastUnits;
//     }
//     return _status as CakeStatus;
// }

model(modelName, cakeSchema, collection);