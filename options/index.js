/**
 * Constructs the options argument used by ApolloServer
 * https://www.apollographql.com/docs/apollo-server/api/apollo-server/#options
 */

const typeDefs = require("./type-defs");
const resolvers = require("./resolvers");
const dataSources = require("./data-sources");
const context = require("./context");
const plugins = require("./plugins");
const schemaDirectives = require("./schema-directives");

module.exports = {
  typeDefs,
  resolvers,
  dataSources,
  context,
  plugins,
  schemaDirectives
};
