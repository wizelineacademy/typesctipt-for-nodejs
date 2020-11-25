import express, { Express, Router } from "express";

const app: Express = express();

export function initServer(port: number){
    app.listen(port, function(){
        console.log('Server listen on port', port);
    });
}
