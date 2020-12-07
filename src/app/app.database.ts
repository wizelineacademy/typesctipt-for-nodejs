import { Connection, createConnection } from 'mongoose';

const ENV = process.env.ENV;
const URI = process.env.MONGO_URI || 'localhost'; 

export const dbConn: Connection = ENV === 'test'
    ? createConnection(URI)
    : createConnection(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

dbConn?.on('connected', () => {
    console.log('Connected to MongoDB');
});

dbConn?.on('error', () => {
    console.log('Error connecting with MongoDB');
});