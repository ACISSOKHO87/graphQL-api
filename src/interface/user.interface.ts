export interface IUser {
    userName: String;
    local: {
        email: string;
        password: string;
    };
    isValidPassword: (password: string) => Promise<boolean>;
}

export interface UserForm {
    userName: string;
    email: string;
    password: string;
}
