export interface IUser {
    userName: String;
    local: {
        email: string;
        password: string;
    };
}

export interface UserForm {
    userName: string;
    email: string;
    password: string;
}
