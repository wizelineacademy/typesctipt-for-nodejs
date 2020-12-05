import { Connection, createConnection } from "mongoose";

const env = process.env.ENV;

export const dbConnection: Connection = env == 'test'? null:
  createConnection('mongodb://localhost/cakesFactory');

dbConnection.on('Connected', () => {
  console.log('Conected to dabase breads');
});

dbConnection.on('error', () => {
  console.log('Conected to dabase breads');
});
