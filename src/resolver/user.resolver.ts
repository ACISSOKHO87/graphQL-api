import { User } from "../database/model/user.model";
import { UserForm } from "../interface/user.interface";

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
            try {
                const user = await User.findById(args.id);
                if (!user) {
                    throw new Error(` Not found user by id=${args.id}`);
                }
                return user;
            } catch (error) {
                throw Error("Incident technique");
            }
        },
        getUserByEmail: async (
            parent: any,
            args: any,
            context: any,
            info: any
        ) => {
            try {
                const user = await User.findOne({ "local.email": args.email });
                if (!user) {
                    throw new Error(` Not found user by email=${args.email}`);
                }
                return user;
            } catch (error) {
                throw Error("Incident technique");
            }
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
                    "local.email": args.user.email,
                });
                if (user) {
                    throw new Error("L'email existe déjà");
                }
                const newUser = new User({
                    userName: args.user.userName,
                    local: {
                        email: args.user.email,
                        password: args.user.password,
                    },
                });
                return newUser.save();
            } catch (error) {
                throw Error("Incident technique");
            }
        },
    },
};
