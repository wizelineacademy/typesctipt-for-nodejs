import { createConnection } from 'mongoose';
import 'dotenv/config';

// Create db Conn String
const dbName = process.env.DB_NAME || 'h-cakes';
const connString = `mongodb://localhost/${dbName}`;

// console.log('connString', connString);

// Create db Conn String Options
const mongoDBOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  poolSize: 4,
};

// Connection
export const dbConn = createConnection(connString, mongoDBOptions);
// mongoose.Promise = global.Promise;
dbConn.on(
  'connected',
  console.log.bind(console, 'MongoDB connection success!')
);

dbConn.on('error', console.error.bind(console, 'MongoDB connection error!'));
