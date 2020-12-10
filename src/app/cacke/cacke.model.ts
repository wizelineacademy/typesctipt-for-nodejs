import { Cacke } from './cacke.class';
import { model, NativeError, Schema , Types} from "mongoose";

export const modelName: string = 'Cacke';
export const collection: string = 'cackes';


const cackeSchema = new Schema({
    _id: {
        type: Types.ObjectId,
        auto: true,
    },
    name: { 
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    description: {
        type: String,
        required: true,
        minlength: 50,
        maxlength: 1000,
    },
    ingredients: {
        type: [String],
        required: true,
        validate: function (value) {
            //Checks if one ingrediente 1 character min. 20 chareacters max.
            for (var index = 0; index < value.length; index++) {
                if (value[index].length > 20 || value[index].length < 1) {
                  return false;
                }
              }
              return true;
        },
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        get: function () {
            if (this.stock) {
                return Cacke.getNewCackeStatus(this.stock);
            }
        }
    }
});

model(modelName, cackeSchema, collection);
