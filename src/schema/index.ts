import { mergeTypeDefs } from "@graphql-tools/merge";
import { TodosSchema } from "./todo.schema";
import { UsersSchema } from "./user.schema";

export const mergedSchema = mergeTypeDefs([UsersSchema, TodosSchema]);
