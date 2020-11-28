import { initServer } from "./app";

import * as dotenv from "dotenv";

dotenv.config();

let PORT: number;
// Retrieve the listening port from the environment variables
PORT = +(process.env.PORT || 8080);

console.log("PORT");

initServer(PORT);
