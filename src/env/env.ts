
type EnvKeys =  {[P in keyof NodeJS.ProcessEnv]: any}

interface TypedEnv extends EnvKeys{
    PORT: number
}
export const ENV: TypedEnv = {
    PORT: Number(process.env.PORT) || 3000,
    MONGO_DB_URL: process.env.MONGO_DB_URL
}

