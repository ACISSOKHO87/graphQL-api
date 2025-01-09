import { Todo } from "../database/model/todo.model";
import { User } from "../database/model/user.model";
export const TodosResolver = {
    Query: {
        todos: async () => {
            return await Todo.find();
        },
        todo: async (parent: any, args: any) => {
            try {
                const todo = Todo.findById(args.id);
                if (!todo) {
                    throw new Error(`Not found todo with  id=${args.id}`);
                }
                return todo;
            } catch (error) {
                throw error;
            }
        },
    },

    Todo: {
        user: async function (parent: any) {
            return await User.findById(parent.userId);
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
                throw error;
            }
        },
        editContentTodo: async (_: any, args: any) => {
            try {
                const todo = await Todo.findById(args.id);
                if (!todo) {
                    throw new Error(`Not found todo with id= ${args.id}`);
                } else {
                    const editTodo = await Todo.findByIdAndUpdate(
                        args.id,
                        {
                            ...todo,
                            content: args.todo.content,
                            edit: args.todo.edit,
                        },
                        { new: true }
                    );
                    console.log(editTodo);
                    return editTodo;
                }
            } catch (error) {
                throw error;
            }
        },
    },
};
