import mongoose, { mongo } from "mongoose";

export const connectDB = async (uri: string) => {
    return mongoose
        .connect(uri)
        .then(() => console.log("Connexion DB réussi"))
        .catch((error) => console.log(error));
};
