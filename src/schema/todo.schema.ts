import { buildSchema } from "graphql";

export const TodosSchema = buildSchema(`#graphql
    type Todo {
        id: String!
        content: String!
        done: Boolean!
        edit: Boolean!
    }
        
    type Query {
        getTodos: [Todo!]!
        getTodoById(id: String!): Todo!
    }

    type Mutation {
        registerTodo(todo: AddDataTodo): Todo!
        updateTodo(todo: EditDataTodo): Todo!
        deleteTodo(id: String!): Todo!
    }

    input AddDataTodo {
        content: String!,
        userId: String!
    }
    input EditDataTodo {
        content: String,
        done: Boolean,
        edit: Boolean
    }
`);
