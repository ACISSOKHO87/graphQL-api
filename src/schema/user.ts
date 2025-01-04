import { buildSchema } from "graphql";

export const userGQLSchema = buildSchema(`
    
    type User {
        id: String!
        userName: String!
        local: {
            email: String!
            password: String!
        }
    }

    type infoResponse {
        succes: Boolean!
        users: [User!]!
    }

    type Query: {
        users: infoResponse!
        users(id: String!): User!
    }
`);
