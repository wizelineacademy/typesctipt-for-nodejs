import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

import { app } from './app/app.server';

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})