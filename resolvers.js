const { AboutQueries, About} = require("./resources/About/resolvers");

const {
  BookQueries,
  BookMutations,
  Book
} = require("./resources/Book/resolvers")

const resolvers = {
  About,
  Book,
  Query: {
    ...AboutQueries,
    ...BookQueries
  },
  Mutation: {
    ...BookMutations
  }
};

module.exports = resolvers;
