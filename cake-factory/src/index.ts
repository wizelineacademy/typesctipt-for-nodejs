import { initServer } from './app.server'

const port = parseInt(process.env.PORT, 10) || 3000;

initServer(port)
