import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "graphql";
const PORT = 3000;

// Définir le schema de graphQL
// Notre contrat: ce que nous offrons à travers notre server graphql
const typeDefs = buildSchema(`
    type Book {
        title: String
        author: String
    }
    #books query
    type Query {
        books: [Book]
    }

`);

const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];
// implémentation du contrat
const resolvers = {
    Query: {
        books: () => books,
    },
};

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
