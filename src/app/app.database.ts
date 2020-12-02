import mongoose from 'mongoose';
import { createConnection } from 'mongoose';
import { mongoUri, configObj, dbStreamsHandler } from './database.config'

export const dbConn = createConnection(mongoUri, configObj);
dbConn.on('error', dbStreamsHandler.error);
dbConn.on('open', dbStreamsHandler.open);
mongoose.set('useCreateIndex', true);
