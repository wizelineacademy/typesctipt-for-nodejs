import { model, Schema } from 'mongoose';
import { isEmail, isPhoneNumber } from '../../utils/validate';

const modelName: string = 'Sale';
const collection: string = 'sales';

const Sales = model(
  modelName,
  new Schema({
    customerName: {
      type: Schema.Types.String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    customerPhoneNumber: {
      type: Schema.Types.String,
      required: true,
      minlength: 10,
      validate: function (value) {
        return isPhoneNumber(value);
      },
    },
    customerEmail: {
      type: Schema.Types.String,
      minlength: 5,
      maxlength: 100,
      validate: function (value: string) {
        return isEmail(value);
      },
    },
    cakeId: {
      type: Schema.Types.String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  }),
  collection
);

export default Sales;
