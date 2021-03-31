"use strict";

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./type-defs");
const resolvers = require("./resolvers");
const dataSources = require("./data-sources");
const context = require('./context');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const apolloOptions = {
  typeDefs,
  resolvers,
  dataSources,
  context
};
const server = new ApolloServer(apolloOptions);

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  // eslint-disable-next-line
  console.log(`🚀 Server ready at ${url}`);
});
