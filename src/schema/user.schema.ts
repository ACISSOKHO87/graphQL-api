import { gql } from "graphql-tag";

export const UsersSchema = gql`
    #graphql

    type IUserLocal {
        email: String
        password: String
    }
    type User {
        id: String!
        userName: String!
        local: IUserLocal!
        todos: [Todo!]
    }

    type LoginResponse {
        token: String!
        user: User!
    }
    type Query {
        users: [User!]!
        user(id: String!): User!
    }

    type Mutation {
        registerUser(user: AddDataUser!): User!
        loginUser(user: LoginDataUser!): LoginResponse!
        updateUserPassword(user: UpdatePassword): User!
    }

    input AddDataUser {
        userName: String!
        email: String!
        password: String!
    }

    input LoginDataUser {
        email: String!
        password: String!
    }

    input UpdatePassword {
        id: String!
        password: String!
    }
`;
