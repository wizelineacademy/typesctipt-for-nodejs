import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

import { app } from './app/app.server';

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})