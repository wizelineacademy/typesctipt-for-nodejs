// getting environment variables
import dotenv from 'dotenv';
dotenv.config();

// mongo database URI
export const mongoUri = process.env.MONGO_URI;

export const configObj = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

export const dbStreamsHandler = {
  error: () => {
    console.log('> error ocurred from the database');
  },
  open: () => {
    console.log('> successfully opened the database');
  },
};
