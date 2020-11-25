declare namespace NodeJS {
  export interface ProcessEnv {
    SERVER_PORT: number;
    DB_HOST: string;
    DB_URL: string;
    DB_PORT: number;
    DB_NAME: string;
    EXTRA: string;
  }
}
