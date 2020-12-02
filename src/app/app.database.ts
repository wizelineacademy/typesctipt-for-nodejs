import { createConnection, Connection } from 'mongoose';

import { dbConfig } from './app.config';

const URI: string = dbConfig.MONGO_URI || 'localhost';

export const conn: Connection = createConnection(URI);

conn.on('connected', () => {
    console.log('MongoDB connected');
});

conn.on('error', () => {
    console.log('MongoDB connection error');
});