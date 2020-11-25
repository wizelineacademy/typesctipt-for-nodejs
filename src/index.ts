import { initServer } from "./app/app.server";
import "dotenv/config";

initServer(+process.env.PORT || 666);
