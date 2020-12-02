import { createConnection } from "mongoose";
import { ENV } from "../env/env";

export const dbMain = createConnection(ENV.MONGO_DB_URL);