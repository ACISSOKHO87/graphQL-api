const todos = [
    {
        id: 1,
        done: false,
        edit: false,
        content: "Learning graphQL",
    },
    {
        id: 2,
        done: false,
        edit: false,
        content: "Learning git/GitlabCICD",
    },
];

export const TodosResolver = {
    Query: {
        todos: () => todos,
        getTodoById(parent: any, args: any, contextValue: any, info: any) {
            const todo = todos.find((todo) => todo.id === args.id);
            if (!todo) {
                throw new Error(`Not found todo with  id=${args.id}`);
            }
            return todo;
        },
    },
};
