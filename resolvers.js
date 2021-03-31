const { AboutQueries, AboutMutations, ...AboutResolvers } = require("./resources/About/resolvers");
const { BookQueries, BookMutations, ...BookResolvers } = require("./resources/Book/resolvers");
const { TokenMutations, ...TokenResolvers } = require("./resources/Token/resolvers");

const resolvers = {
  ...AboutResolvers,
  ...BookResolvers,
  ...TokenResolvers,
  Query: {
    ...AboutQueries,
    ...BookQueries
  },
  Mutation: {
    ...AboutMutations,
    ...BookMutations,
    ...TokenMutations
  }
};

module.exports = resolvers;
