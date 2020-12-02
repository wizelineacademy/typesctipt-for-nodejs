declare namespace NodeJS {
  export interface ProcessEnv {
    PORT?: string,
    MONGO_DB_URL: string
  }
}