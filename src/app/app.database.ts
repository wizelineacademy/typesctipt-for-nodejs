import { Connection, createConnection } from "mongoose"

const env = process.env.ENV



export const db = env == 'test' ? undefined : createConnection('mongodb://localhost:27017/cakes',
    { useUnifiedTopology: true, useNewUrlParser: true })

db?.on('connected', () => {
    console.log("Connected to Mongo");
})

db?.on('error', () => {
    console.log("Error connecting to Mongo");
})