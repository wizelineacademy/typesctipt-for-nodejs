import { createConnection, Connection } from "mongoose";

export const conn: Connection = createConnection(
  `mongodb://localhost:27017/cakes`
);

conn.on("connected", () => console.log("Connected"));
conn.on("error", () => console.log("Connection error"));
