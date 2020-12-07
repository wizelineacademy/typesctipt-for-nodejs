import mongoose from 'mongoose';
import { createConnection } from 'mongoose';
import { mongoUri, configObj, dbStreamsHandler } from './database.config'
import dotenv from 'dotenv';
dotenv.config();

const env = process.env.ENV;


export const dbConn = env === 'test' ? null : createConnection(mongoUri, configObj);
dbConn.on('error', dbStreamsHandler.error);
dbConn.on('open', dbStreamsHandler.open);
mongoose.set('useCreateIndex', true);
