import { Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    minlength: 50,
    maxlength: 1000
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
  ingredients: {
    type: [
      {
        type: String,
        min: 1,
        max: 20
      }
    ]
  }
})

export default schema
