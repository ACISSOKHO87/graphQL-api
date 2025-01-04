import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "graphql";
const PORT = 3000;

// Définir le schema de graphQL
// Notre contrat: ce que nous offrons à travers notre server graphql
import { typeDefs } from "./schema/todo";
import { resolvers } from "./resolver/todo";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
});

const start = async () => {
    try {
        await startStandaloneServer(server, { listen: { port: PORT } });
        console.log(`Server is running on port localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
};

start();
