import { model, Schema , Types} from "mongoose";

export const modelName: string = 'Cacke';
export const collection: string = 'cackes';

model(modelName, new Schema({
    _id: {
        type: Types.ObjectId,
        index: true,
        required: true,
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
            //TODO: move later to utils to have a general thing for validators
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
    }
}), collection);
