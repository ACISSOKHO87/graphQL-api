import express, { Application } from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { connectDB } from "./database";

import { typeDefs } from "./schema";
import { resolvers } from "./resolver";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Application = express();

const httpServer = http.createServer(app);
async function startServer() {
    try {
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        });

        await connectDB(process.env.DB_URI!);
        await server.start();
        app.use(cors<cors.CorsRequest>(), express.json());
        app.use("/graphql", expressMiddleware(server));
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();
