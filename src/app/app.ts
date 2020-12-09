import express, { Express, Router } from 'express';
//import { router as BreadRouter } from '../routes/bread';

const app : Express = express();
const router: Router = Router();

// Middlewares
app.use(router);

app.get("/", (req, res) => {
    res.status(200).send("This is home");
});

export function initServer( port : number){
    app.listen( port, () => {
        console.log("Server listenning on port:", port);
    });
}
