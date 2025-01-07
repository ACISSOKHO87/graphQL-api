import { buildSchema } from "graphql";

export const usersSchema = buildSchema(`#graphql
    
    type IUserLocal {
        email: String!
        password: String!
    }

    type UserForm {
        userName: String!
        email: String!
        password: String!
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
        registerUser(user: addDataUser): User!
    }

    input addDataUser {
        userName: String,
        email: String,
        password: String
    }
`);
