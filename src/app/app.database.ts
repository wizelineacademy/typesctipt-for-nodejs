import { Connection, createConnection } from "mongoose";

const env = process.env.ENV;

export const dbMain: Connection = env == 'test' ? null :
createConnection('mongodb://localhost/breads', {
  useUnifiedTopology: true, useNewUrlParser: true
});

dbMain?.on('connected', () => {
  console.log('Connected to database breads...');
});

dbMain?.on('error', () => {
  console.log('Error connecting to database breads...');
});
