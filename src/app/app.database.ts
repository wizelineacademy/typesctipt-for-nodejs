import { createConnection } from 'mongoose';

import { dbConfig } from './app.config';

const URI = dbConfig.MONGO_URI || 'localhost';

export const conn = createConnection(URI);

conn.on('connected', () => {
    console.log('MongoDB connected');
});

conn.on('error', () => {
    console.log('MongoDB connection error');
});