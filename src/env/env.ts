
// export interface Env{
//     PORT?: number | string;
// }



type EnvKeys =  {[P in keyof NodeJS.ProcessEnv]: any}

interface TypedEnv extends EnvKeys{
    PORT: number
}
export const ENV: TypedEnv = {
    PORT: Number(process.env.PORT) || 3000
}

