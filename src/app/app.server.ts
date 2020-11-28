import express, { Express, Router } from 'express'
import * as bodyParser from 'body-parser'
import { router as cakeRouter } from './cake/cake.router'
import { router as saleRouter } from './sale/sale.router'
import { indexPostHandler } from './cake/handlers/post.handler'
import { idPatchHandler } from './cake/handlers/patch.handler'
import { salesPostHandler } from './sale/handlers/post.handler'
const app: Express = express()
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const router: Router = Router()

app.use(router)
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(jsonParser)
app.use(urlencodedParser)


router.use('/cakes', cakeRouter)

router.use('/sales', saleRouter)

// Sorry to do this, it was the only way I could receive the body
app.post('/cakes', indexPostHandler)

app.patch('/cakes/:id', idPatchHandler)

app.post('/sales', salesPostHandler)

export function initServer(port: number){
    app.listen(port, function(){
        console.log("Server listening on port: " + port)
    })
}
