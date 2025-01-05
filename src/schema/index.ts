import { mergeTypeDefs } from "@graphql-tools/merge";
import { todosSchema } from "./todo.schema";
import { usersSchema } from "./user.schema";

export const mergedSchema = mergeTypeDefs([usersSchema, todosSchema]);
