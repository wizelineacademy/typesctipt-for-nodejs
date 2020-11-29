import * as dotenv from 'dotenv';
dotenv.config();

type Config = {
    port: number,
    env: string,
}

/**
 * Global application and environmental variables
 */
const config: Config = {
    port: +process.env.PORT || 3000,
    env: process.env.ENVIRONMENT || 'development'
}

export default config;