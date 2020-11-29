import 'dotenv/config';

const config: { HOST: string, PORT: number } = {
  HOST: process.env.HOST || '127.0.0.1',
  PORT:  +process.env.PORT || 3001
}

export default config;