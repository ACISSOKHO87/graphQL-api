import { buildSchema } from "graphql";

export const UsersSchema = buildSchema(`#graphql
    
    type IUserLocal{
        email: String
        password: String
    }
    type User {
        id: String!
        userName: String!
        local: IUserLocal!
    }

    type Query {
        users: [User!]!
        getUserById(id: String!): User!
        getUserByEmail(email: String!): User!
    }

    type Mutation {
        registerUser(user: AddDataUser!): User!
        loginUser(user: LoginDataUser!): User!
        updateUserPassword(id: String!, password: String! ): User!
    }

    input AddDataUser {
        userName: String!,
        email: String!,
        password: String!
    }

    input LoginDataUser {
        email: String!,
        password: String!
    }

`);
