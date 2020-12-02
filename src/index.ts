// Application main entry point
import { initServer } from './app/app.server';
// Require and configure dotenv
import dotenv from 'dotenv';
dotenv.config();

// reading from config file
const port: number = +process.env.PORT || 3003;
// HW message
const halloMessage: string = 'Hallo Welt!';
console.log(halloMessage);
// Server initialization
initServer(port);
