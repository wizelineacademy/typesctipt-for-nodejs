import express, {Express, Router} from  'express'
import {router as breadRouter} from "./bread/bread.router";

const app: Express = express();
const router: Router = Router();

router.use('/breads', breadRouter);
app.use(router);

export function initServer(port:number){
    app.listen(port, function (){
        console.log('Server listen on port', port);
    });
}