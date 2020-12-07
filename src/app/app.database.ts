import { createConnection } from 'mongoose';
import 'dotenv/config';

export const dbConn = createConnection(
  `mongodb://${process.env.HOST}/${process.env.DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

dbConn.on('connected', () => {
  console.info(`Connection to database ${process.env.DB_NAME} successfull`);
});

dbConn.on('error', () => {
  console.info(`Connection to database ${process.env.DB_NAME} error`);
});
