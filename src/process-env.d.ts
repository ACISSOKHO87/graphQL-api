namespace NodeJS {
    interface ProcessEnv {
        [key: string]: string | undefined;
        DB_URI: string;
    }
}