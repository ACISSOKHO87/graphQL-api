import { buildSchema } from "graphql";

export const typeDefs = buildSchema(`
    type Todo {
        id: Int!
        content: String!
        done: Boolean!
        edit: Boolean!
    }
        
    type Query {
        getTodoById(id: Int!): Todo!
        todos: [Todo!]
    }
`);

/* 
"id": "54fa6af4-c3df-4b88-a9e7-1e569db09acd"
"id": "8620b9cd-c04c-41ab-b901-34896307400e"
*/
