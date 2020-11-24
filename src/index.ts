import { initServer } from "./app";

import * as dotenv from "dotenv";

dotenv.config();

let PORT: number;
// Retrieve the listening port from the environment variables
PORT = Number(process.env.PORT);
if (!PORT) {
  PORT = 8080;
}
console.log("PORT");

initServer(PORT);
