import { Schema } from "mongoose";
import { CakeStatus } from "./cake-status.enum";

const CakeSchema = new Schema({
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
    maxlength: 100,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  ingredients: {
    type: [
      {
        type: String,
        min: 1,
        max: 20,
      },
    ],
  },
  status: {
    type: String,
    enum: [CakeStatus.Available, CakeStatus.LastUnits, CakeStatus.OutOfStock],
  },
});

export { CakeSchema as Cake };
