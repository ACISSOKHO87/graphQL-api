import { Todo } from "../database/model/todo.model";
import { User } from "../database/model/user.model";
import { UserForm } from "../interface/user.interface";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const UsersResolver = {
    Query: {
        users: async () => {
            const users = await User.find();
            return users;
        },
        user: async (_: any, args: any, context: any) => {
            try {
                const user = await User.findById(args.id);
                if (!user) {
                    throw new Error(` Not found user by id=${args.id}`);
                }
                return user;
            } catch (error) {
                throw error;
            }
        },
    },

    User: {
        todos: async function (parent: any) {
            return await Todo.find({ userId: parent.id });
        },
    },

    Mutation: {
        registerUser: async (_: any, args: any) => {
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
                throw error;
            }
        },
        loginUser: async (_: any, args: any) => {
            try {
                const user = await User.findOne({
                    "local.email": args.user.email,
                });
                if (!user) {
                    throw new Error("Email ou mot de passe invalide");
                } else {
                    const compare = await user.isValidPassword(
                        args.user.password
                    );
                    if (!compare) {
                        throw new Error("Email ou mot de passe invalide");
                    }
                    const token = jwt.sign(
                        {
                            sub: user._id!.toString(),
                            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // durée de validité 24h
                            algorithm: "RS256",
                        },
                        process.env.SECRET!
                    );
                    console.log(token);
                    return {
                        user,
                        token,
                    };
                }
            } catch (error) {
                throw error;
            }
        },
        updateUserPassword: async (_: any, args: any) => {
            try {
                const user = await User.findById(args.user.id);
                if (!user) {
                    throw new Error("L'utilisateur n'existe pas");
                } else {
                    const salt = await bcrypt.genSalt(12);
                    const hash = await bcrypt.hash(args.user.password, salt);

                    const updatedUser = await User.findByIdAndUpdate(
                        args.user.id,
                        {
                            ...user,
                            "local.password": hash,
                        },
                        { new: true }
                    );
                    return updatedUser;
                }
            } catch (error) {
                throw error;
            }
        },
    },
};
