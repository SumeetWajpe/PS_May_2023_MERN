import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;
import express from "express";
import { typeDefs } from "../schema/typeDefs.js";
import { resolvers } from "../schema/resolvers.js";
import mongoose from "mongoose";
const app = express();
mongoose.connect("mongodb://localhost:27017/onlinetrainingdb", {});
mongoose.connection.on("open", () => {
    console.log(`Online Training DB connected !`);
});
mongoose.connection.on("error", err => {
    console.log(err);
});
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();
// Specify the path where we'd like to mount our server
//highlight-start
app.use("/graphql", cors(), json(), expressMiddleware(server));
//highlight-end
app.listen(4000, () => console.log("GraphQL Server running at 4000 !"));
