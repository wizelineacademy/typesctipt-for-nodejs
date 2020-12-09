import { model, Schema, Types } from 'mongoose';

export const modelName: string = 'Sell';
export const collection: string = 'sale';

model(modelName, new Schema({
    _id: {
         type: Types.ObjectId, 
         index: true, 
         required: true,
         auto: true
    }, 
    customerName: {
         type: String, 
         required: true, 
         minlength: 3, 
         maxlength: 50
    }, 
    phoneNumber: {
         type: String, 
         required: true, 
         minlength: 10, 
         validate: function(value){
             var numberFormat = /^\d+$/;
             return numberFormat.test(value);
        }
    }, 
    email: {
         type: [String], 
         minlength: 5, 
         maxlength: 100, 
         validate: function(value){
            var validEmailFormat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return validEmailFormat.test(value);
        }
    }, 
    cakeId: {
        type: String,
        required: true, 
        min: 1, 
        validate: function(value){
            return true;
        }
    }, 
    quantity: {
        type: Number, 
        required: true, 
        min: 1
    }
}), collection);