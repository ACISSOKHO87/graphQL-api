import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { MongoMemoryServer } from "mongodb-memory-server";
import { buildSchema } from "graphql";
const PORT = 3000;

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
        const mongo = await MongoMemoryServer.create();
        const uri = mongo.getUri();
        await connectDB(uri);
        await startStandaloneServer(server, { listen: { port: PORT } });
        console.log(`Server is running on port localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
};

start();
