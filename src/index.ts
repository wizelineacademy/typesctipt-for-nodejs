import express, { Router } from 'express';
import * as dotenv from 'dotenv';

dotenv.config({
    path: '.env'
});

const PORT = process.env.PORT;

const app = express();

const router: Router = Router();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

