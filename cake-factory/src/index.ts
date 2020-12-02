import { initServer } from './app.server'

const port = +(process.env.PORT|| 3000);

initServer(port)
