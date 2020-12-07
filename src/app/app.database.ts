import { Connection, createConnection } from 'mongoose';

export const dbMain: Connection | null =
  process.env.ENV === 'test'
    ? null
    : createConnection(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`
      );

dbMain?.on('connected', () => {
  console.log('Connected to database cakefactory...');
});

dbMain?.on('error', () => {
  console.log('Error connecting to database cakefactory...');
});
