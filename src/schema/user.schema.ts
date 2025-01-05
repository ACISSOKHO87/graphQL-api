import { buildSchema } from "graphql";

export const usersSchema = buildSchema(`
    
    type IUserLocal {
        email: String!
        password: String!
    }
    type User {
        id: Int!
        userName: String!
        local: IUserLocal!
    }

    type Query {
        users: [User!]!
        getUserById(id: Int!): User!
        getUserByEmail(email: String!): User!
    }

`);

/*
type infoResponse {
        succes: Boolean!
        users: [User!]!
    }

*/
