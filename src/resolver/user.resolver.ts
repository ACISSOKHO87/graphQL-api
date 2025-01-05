import { User } from "../database/model/user.model";
import { UserForm } from "../interface/user.interface";

// const users = [
//     {
//         id: 1,
//         userName: "Ablo",
//         local: {
//             email: "ablo@gmail.com",
//             password: "ablo123",
//         },
//     },
//     {
//         id: 2,
//         userName: "Toto",
//         local: {
//             email: "toto@gmail.com",
//             password: "toto123",
//         },
//     },
//     {
//         id: 3,
//         userName: "Pathé",
//         local: {
//             email: "pathe@gmail.com",
//             password: "pathe123",
//         },
//     },
// ];

export const UsersResolver = {
    Query: {
        users: async () => {
            const users = await User.find();
            return users;
        },
        getUserById: async (
            parent: any,
            args: any,
            context: any,
            info: any
        ) => {
            const user = await User.findById(args.id);
            if (!user) {
                throw new Error(` Not found user by id=${args.id}`);
            }
            return user;
        },
        getUserByEmail: async (
            parent: any,
            args: any,
            context: any,
            info: any
        ) => {
            const user = await User.findOne({ "local.email": args.email });
            if (!user) {
                throw new Error(` Not found user by email=${args.email}`);
            }
            return user;
        },
    },

    Mutation: {
        registerUser: async (
            parent: any,
            args: any,
            context: any,
            info: any
        ) => {
            try {
                const user = await User.findOne({
                    "local.email": args.email,
                });
                if (user) {
                    throw new Error("L'email existe déjà");
                }
                const newUser = new User({
                    userName: args.userName,
                    local: {
                        email: args.email,
                        password: args.password,
                    },
                });
                return newUser.save();
            } catch (error) {
                throw error;
            }
        },
    },
};
