namespace NodeJS {
    interface ProcessEnv {
        [key: string]: string | undefined;
        DB_URI: string;
        PORT: number;
        SECRET: string;
    }
}
