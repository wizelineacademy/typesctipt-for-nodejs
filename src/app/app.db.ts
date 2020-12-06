import { Connection, createConnection } from "mongoose";
import { registry, autoInjectable, singleton } from "tsyringe";
import { ENV } from "../env/env";


@singleton()
@registry([
    { token: Connection, useFactory(){ return createConnection(ENV.MONGO_DB_URL)}}
])
export class DbManager{
        constructor(readonly dbMain: Connection){}

}