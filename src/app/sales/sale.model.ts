import { Document, Schema } from "mongoose";

const SaleSchema = new Schema({
  customerName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  customerPhoneNumber: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  customerEmail: {
    type: String,
    minlength: 5,
    maxlength: 100,
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 1,
  },
  cake: {
    type: Schema.Types.ObjectId,
    ref: "Cake",
    required: true,
  },
});

export { SaleSchema };
