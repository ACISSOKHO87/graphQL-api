import { Todo } from "../database/model/todo.model";

export const TodosResolver = {
    Query: {
        getTodos: async () => {
            return await Todo.find();
        },
        getTodoById: async (_: any, args: any) => {
            try {
                const todo = Todo.findById(args.id);
                if (!todo) {
                    throw new Error(`Not found todo with  id=${args.id}`);
                }
                return todo;
            } catch (error) {
                throw new Error("Incident technique");
            }
        },
    },

    Mutation: {
        registerTodo: async (_: any, args: any) => {
            try {
                const newTodo = new Todo({
                    ...args.todo,
                });
                return newTodo.save();
            } catch (error) {
                throw Error("Incident technique");
            }
        },
    },
};
