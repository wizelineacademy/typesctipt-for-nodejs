import { createConnection } from "mongoose";

export const dbMain = createConnection('mongodb://localhost/breads', {
  useUnifiedTopology: true, useNewUrlParser: true
});

dbMain.on('connected', () => {
  console.log('Connected to database breads...');
});

dbMain.on('error', () => {
  console.log('Error connecting to database breads...');
});
