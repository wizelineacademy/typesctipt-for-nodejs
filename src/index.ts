import { config } from 'dotenv';

config({
    path: '.env'
});

import { initServer } from './app/app.server';

const PORT = process.env.PORT || 3000;

initServer(+PORT);