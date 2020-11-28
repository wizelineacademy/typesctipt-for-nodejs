import express from 'express';
import * as dotenv from 'dotenv';

import routes from './app/app.server';

dotenv.config({
    path: '.env'
});

const PORT = process.env.PORT;

const app = express();

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});