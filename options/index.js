const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');
const dataSources = require('./data-sources');
const context = require('./context');
const plugins = require('./plugins');

module.exports = {
  typeDefs,
  resolvers,
  dataSources,
  context,
  plugins
};
