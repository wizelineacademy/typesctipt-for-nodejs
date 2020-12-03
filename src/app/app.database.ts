import { createConnection } from 'mongoose';

const db = process.env.DB || '';
const dbHost = process.env.DBHOST || '';

const connectionString = `${dbHost}${db}`;
console.log('connectionString', connectionString);

export const dbMain = createConnection(connectionString, {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

dbMain.on('connected', () => {
  console.log('Db Connected');
});

dbMain.on('error', (err) => {
  console.log('Db Connection failed', err);
});
