import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "graphql";
const PORT = 3000;

dotenv.config();
// Définir le schema de graphQL
// Notre contrat: ce que nous offrons à travers notre server graphql
import { mergedSchema as typeDefs } from "./schema";
import { resolvers } from "./resolver";
import { connectDB } from "./database";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
});

const start = async () => {
    try {
        await connectDB(process.env.DB_URI!);
        await startStandaloneServer(server, { listen: { port: PORT } });
        console.log(`Server is running on port localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
};

start();
