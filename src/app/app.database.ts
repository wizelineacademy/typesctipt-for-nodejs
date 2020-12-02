import { createConnection } from "mongoose";

export const dbMain = createConnection('mongodb://localhost:27017/cacke-api', {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
});

dbMain.on("Connected", () => {  
    console.log("connected");
});