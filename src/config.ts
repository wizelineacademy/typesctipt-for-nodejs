import * as dotenv from 'dotenv';
dotenv.config();

type Config = {
    port: number,
    env: string,
    mongoConnectionString: string,
}

/**
 * Global application and environmental variables
 */
const config: Config = {
    port: +process.env.PORT || 3000,
    env: process.env.ENVIRONMENT || 'development',
    mongoConnectionString: process.env.MONGODB_URL || ''
}

export default config;