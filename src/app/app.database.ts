import { createConnection } from "mongoose";

export const dbConnection = createConnection('mongodb://localhost/cakesFactory');

dbConnection.on('Connected', () => {
  console.log('Conected to dabase breads');
});

dbConnection.on('error', () => {
  console.log('Conected to dabase breads');
});

