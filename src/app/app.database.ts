import { Connection, createConnection } from 'mongoose';

const env = process.env.ENV;

export const dbConn: Connection = env === 'test'
    ? createConnection('localhost')
    : createConnection('mongodb+srv://wizeline:admin@cake-shop-cluster.xmm4z.mongodb.net/wizeline?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

dbConn?.on('connected', () => {
    console.log('Connected to MongoDB');
});

dbConn?.on('error', () => {
    console.log('Error connecting with MongoDB');
});