// Application main entry point
// Require and configure dotenv
import dotenv from 'dotenv';
dotenv.config();

// App server
import { initServer } from './app/app.server';
// HW message
const halloMessage: string = 'Hallo Welt!';
console.log(halloMessage);
// Workaround in the meantime...Ask to tutors.
const port: number = process.env.PORT ? +process.env.PORT : 3003;
// Server initialization
initServer(port);
