import { Cake } from './cake.class';
import { model, NativeError, Schema, Types} from 'mongoose';

export const modelName: string = 'Cake';
export const collection: string = 'cakes';

const CakeSchema = new Schema({
    _id:{
        type: Types.ObjectId, 
        index: true, 
        required: true, 
        auto: true
    }, 
    name:{
        type: String, 
        required: true, 
        minlength: 5, 
        maxlength: 50   
    }, 
    price: {
        type: Number, 
        required: true, 
        min: 1
    },
    description: {
        type: String, 
        required: true, 
        minlength: 50, 
        maxlength: 500
    }, 
    ingredients:{
        type: [String], 
        required: true, 
        validate: function(value){
            for (var index = 0; index < value.length; index++) {
                if (value[index].length > 20 || value[index].length < 1) {
                  return false;
                }
              }
              return true
        }
    }, 
    stock:{
        type: Number, 
        required: true, 
        min:0
    }, 
    status: {
        type: String, 
        get: function(){
            if(this.stock){
                return Cake.getNewCakeStatus(this.stock);
            }
        }
    }

});

model(modelName, CakeSchema, collection);