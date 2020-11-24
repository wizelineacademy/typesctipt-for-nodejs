import * as dotenv from "dotenv";
import { initServer } from "./app/app.server";

dotenv.config();

const port: number = Number(process.env.PORT) || 3000;

initServer(port);
