import express, { Express, Router} from 'express'
import { router as breadRouter } from "./bread/bread.router"
const app: Express = express()

const router: Router = Router()

app.use(router)

router.use('/breads', breadRouter)

export function initServer(port: number){
    app.listen(port, function(){
        console.log("Server listening on port: " + port)
    })
}
