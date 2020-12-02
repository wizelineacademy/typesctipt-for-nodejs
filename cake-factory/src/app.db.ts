import { createConnection } from 'mongoose'

export const connection = createConnection(`mongodb://localhost:27017/cakes`)

connection.on('connected', () => console.log('Connected to database')) // tslint:disable-line
connection.on('error', () => console.log('Error connecting to database')) // tslint:disable-line
