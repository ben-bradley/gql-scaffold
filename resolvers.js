const { AboutQueries, AboutMutations, ...AboutResolvers } = require("./resources/About/resolvers");
const { BookQueries, BookMutations, ...BookResolvers } = require("./resources/Book/resolvers");

const resolvers = {
  ...AboutResolvers,
  ...BookResolvers,
  Query: {
    ...AboutQueries,
    ...BookQueries
  },
  Mutation: {
    ...AboutMutations,
    ...BookMutations
  }
};

module.exports = resolvers;
