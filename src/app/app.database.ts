import { createConnection } from 'mongoose';

const db = process.env.DB || '';
const dbHost = process.env.DBHOST || '';

export const dbMain = createConnection(`${dbHost}${db}`, {
  useNewUrlParser: true,
});

dbMain.on('connected', () => {
  console.log('Db Connected');
});

dbMain.on('error', (err) => {
  console.log('Db Connection failed', err);
});
