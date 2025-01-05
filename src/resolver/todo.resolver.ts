const todos = [
    {
        id: 1,
        done: false,
        edit: false,
        content: "Learning graphQL",
        userId: 1,
    },
    {
        id: 2,
        done: false,
        edit: false,
        content: "Learning git/GitlabCICD",
        userId: 2,
    },
];

export const TodosResolver = {
    Query: {
        getTodos: () => todos,
        getTodoById(parent: any, args: any, contextValue: any, info: any) {
            const todo = todos.find((todo) => todo.id === args.id);
            if (!todo) {
                throw new Error(`Not found todo with  id=${args.id}`);
            }
            return todo;
        },
    },
};
