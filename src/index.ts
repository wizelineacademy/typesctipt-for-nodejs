// Application main entry point
import { initServer } from './app/app.server';
// Require and configure dotenv
import dotenv from 'dotenv';
dotenv.config();

/**
 * This issue is fixed because of the tsconfig file, I just removed the strict option or it can be st to false
 */
// Workaround in the meantime...Ask to tutors.
// const port: number = process.env.PORT ? +process.env.PORT : 3003;
const port: number = +process.env.PORT || 3003;
// HW message
const halloMessage: string = 'Hallo Welt!';
console.log(halloMessage);
// Server initialization
initServer(port);
