const { AboutQueries, AboutMutations, ...AboutResolvers } = require("./resources/About/resolvers");
const { BookQueries, BookMutations, ...BookResolvers } = require("./resources/Book/resolvers");
const { TokenMutations, ...TokenResolvers } = require("./resources/Token/resolvers");
const { UserQueries, ...UserResolvers } = require("./resources/User/resolvers");

const resolvers = {
  ...AboutResolvers,
  ...BookResolvers,
  ...TokenResolvers,
  ...UserResolvers,
  Query: {
    ...AboutQueries,
    ...BookQueries,
    ...UserQueries
  },
  Mutation: {
    ...AboutMutations,
    ...BookMutations,
    ...TokenMutations
  }
};

module.exports = resolvers;
