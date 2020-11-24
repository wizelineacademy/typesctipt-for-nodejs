import 'dotenv/config';

const config: { HOST: string, PORT: number } = {
  HOST: process.env.HOST || '127.0.0.1',
  PORT:  parseInt(`${process.env.PORT}`, 10) || 3001
}

export default config;