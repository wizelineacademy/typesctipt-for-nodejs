// Import express module and Express data type.
import express, { Express, Router } from "express"
import { router as mainRouter } from "./app.router"
import { router as cakesRouter } from "./cakes/cakes.router"
import { router as salesRouter } from "./sales/sales.router"

// Init express server. (Inferred datatype)
export const app: Express = express()

//Environment Variables Init
require('dotenv').config()

// Init express router.
export const router: Router = Router()

// Declare diffeerent routes.
router.use('/', mainRouter)
router.use('/cakes', cakesRouter)
router.use('/sales', salesRouter)

// Load new routers to redirection module inside app.
app.use(router)


export function initServer(port: number) {

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
        console.log(process.env.PORT);
    })
}