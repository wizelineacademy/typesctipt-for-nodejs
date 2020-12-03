import { model, Schema } from 'mongoose';

const modelName: string = 'Cake';
const collection: string = 'cakes';

const Cake = model(
  modelName,
  new Schema({
    name: {
      type: Schema.Types.String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    description: {
      type: Schema.Types.String,
      required: true,
      minlength: 50,
      maxlength: 1000,
    },
    ingredients: {
      type: [Schema.Types.String],
      required: true,
      validate: [
        {
          validator: function (values: string[]) {
            return values.length >= 3;
          },
          msg: 'You need at least 3 ingredients.',
        },
        {
          validator: function (values: string[]) {
            for (let i = 0; i < values.length; i++) {
              const ingredient = values[i];
              if (ingredient.length < 1 || ingredient.length > 20) {
                return false;
              }
            }
            return true;
          },
          msg: 'Ingredients must be at least characacter and max 20.',
        },
      ],
    },
    price: {
      type: Schema.Types.Number,
      required: true,
      min: 1,
    },
    stock: {
      type: Schema.Types.Number,
      required: true,
      min: 0,
    },
    status: {
      type: Schema.Types.String,
    },
  }),
  collection
);

export default Cake;
