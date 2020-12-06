import { createConnection } from 'mongoose';
import config from '../config'

export const db = createConnection(config.mongoConnectionString, {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

db.on('connected', () => {
    console.info('MongoDB - Connected');
});

db.on('disconnected', () => {
    console.info('MongoDB - Disconnected');
});

db.on('error', (err) => {
    console.error('MongoDB Error', err);
});
