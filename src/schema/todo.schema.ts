import { gql } from "graphql-tag";

export const TodosSchema = gql`
    #graphql
    type Todo {
        id: String!
        content: String!
        done: Boolean!
        edit: Boolean!
        user: User!
    }

    type DeleteTodoResponse {
        success: Boolean!
        message: String!
        id: String!
    }

    type Query {
        todos: [Todo!]!
        todo(id: String!): Todo!
    }

    type Mutation {
        registerTodo(todo: AddDataTodo!): Todo!
        editContentTodo(id: String!, todo: EditDataTodo!): Todo!
        modifyDoneTodo(id: String!): Todo!
        modifyEditTodo(id: String!): Todo!
        deleteTodo(id: String!): DeleteTodoResponse!
    }

    input AddDataTodo {
        content: String!
        userId: String!
    }
    input EditDataTodo {
        content: String
        edit: Boolean
    }
`;
