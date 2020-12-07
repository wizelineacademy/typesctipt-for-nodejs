import { createConnection } from 'mongoose';

const env = process.env.ENV || 'test';
const db = process.env.DB;
const dbHost = process.env.DBHOST;
const connectionString = `${dbHost}${db}`;

export const dbMain =
  env === 'test'
    ? null
    : createConnection(connectionString, {
        autoIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      });

dbMain?.on('connected', () => {
  console.log('Db Connected');
});

dbMain?.on('error', (err) => {
  console.log('Db Connection failed', err);
});
