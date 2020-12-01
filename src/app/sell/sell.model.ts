import { Schema } from 'mongoose';

export const SellSchema = new Schema({
  customerName: {
    type: String,
    required: [true, 'Why no name?'],
    min: [3, 'Required, 3 characters min'],
    max: 50,
  },
  customerPhoneNumber: {
    type: String,
    validate: {
      validator: function (v: string) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    min: 10,
  },
  customerEmail: {
    type: String,
    validate: {
      validator: function (v: string) {
        return /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    min: [5, 'Required, 5 characters min'],
    max: 100,
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
  cake: {
    type: Schema.Types.ObjectId,
    ref: 'Cake',
    required: true,
    default: 1,
  },
});
