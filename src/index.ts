import { initServer } from "./app/app.server";
import * as dotenv from "dotenv";

dotenv.config();
const port = parseInt(process.env.PORT) || 3000;

initServer(port);
