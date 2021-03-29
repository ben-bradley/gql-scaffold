"use strict";

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./type-defs");
const resolvers = require("./resolvers");
const dataSources = require("./data-sources");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, dataSources });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  // eslint-disable-next-line
  console.log(`🚀 Server ready at ${url}`);
});
