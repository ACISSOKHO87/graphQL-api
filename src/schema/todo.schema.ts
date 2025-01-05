import { buildSchema } from "graphql";

export const todosSchema = buildSchema(`
    type Todo {
        id: Int!
        content: String!
        done: Boolean!
        edit: Boolean!
    }
        
    type Query {
        getTodoById(id: Int!): Todo!
        getTodos: [Todo!]!
    }
`);
