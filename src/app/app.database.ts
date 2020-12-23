import { Connection, createConnection } from "mongoose";

const env = process.env.ENV;

export const dbMain: Connection = env == 'test' ? null : 
createConnection('mongodb://localhost/cakes_factory', {
    useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false
});

dbMain?.on('connected', () => {
    console.log("Connected to the database cakes factory");
});

dbMain?.on('error', () => {
    console.log("Error connecting to database cakes factory");
});
