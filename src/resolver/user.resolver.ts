const users = [
    {
        id: 1,
        userName: "Ablo",
        local: {
            email: "ablo@gmail.com",
            password: "ablo123",
        },
    },
    {
        id: 2,
        userName: "Toto",
        local: {
            email: "toto@gmail.com",
            password: "toto123",
        },
    },
    {
        id: 3,
        userName: "Pathé",
        local: {
            email: "pathe@gmail.com",
            password: "pathe123",
        },
    },
];

export const UsersResolver = {
    Query: {
        users: () => users,
        getUserById(parent: any, args: any, contextValue: any, insfo: any) {
            console.log(args);
            const user = users.find((user) => user.id === args.id!);
            if (!user) {
                throw new Error(` Not found user by id=${args.id}`);
            }
            return user;
        },
        getUserByEmail(parent: any, args: any, contextValue: any, insfo: any) {
            const user = users.find((user) => user.local.email === args.email);
            if (!user) {
                throw new Error(` Not found user by id=${args.id}`);
            }
            return user;
        },
    },
};
