import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "../../interface/user.interface";

const userSchema = new Schema(
    {
        userName: { type: String, required: true },
        local: {
            email: { type: String, required: true },
            password: { type: String, required: true },
        },
    },
    { collection: "users" }
);

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(12);
    this.local!.password = await bcrypt.hash(this.local!.password, salt);
});

userSchema.methods.isValidPassword = async function (password: string) {
    const compare = await bcrypt.compare(password, this.local.password);
    return compare;
};
export const User = mongoose.model<IUser>("user", userSchema);
