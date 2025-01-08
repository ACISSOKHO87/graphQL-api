import mongoose, { Schema } from "mongoose";

interface ITodo {
    id: string;
    content: string;
    done: boolean;
    edit: boolean;
    userId: string;
}

const todoSchema = new Schema(
    {
        content: { type: String, required: true },
        done: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    },
    { collection: "todos" }
);

export const Todo = mongoose.model<ITodo>("todo", todoSchema);
