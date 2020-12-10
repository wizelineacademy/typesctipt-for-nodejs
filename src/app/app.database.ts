import dotenv from 'dotenv';
import { createConnection } from "mongoose";
dotenv.config();

export const dbMain = createConnection(process.env.DB, {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
});

dbMain.on("connected", () => {  
    console.log("Connected to the database");
});

dbMain?.on('error', () => {
    console.log('Error connecting to database');
});