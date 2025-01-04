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

export const resolvers = {
    Query: {
        todos: () => todos,
        getTodoById(parent: any, args: any, contextValue: any, info: any) {
            const todo = todos.find((todo) => todo.id === args.id);
            console.log(info);
            if (!todo) {
                throw new Error(`Not found todo with  id=${args.id}`);
            }
            return todo;
        },
    },
};
