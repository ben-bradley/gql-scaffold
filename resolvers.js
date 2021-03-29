const AboutQueries = require("./resources/About/resolvers/Query");
const BookQueries = require("./resources/Book/resolvers/Query");

const resolvers = {
  About: require("./resources/About/resolvers/About"),
  Book: require("./resources/Book/resolvers/Book"),
  Query: {
    ...AboutQueries,
    ...BookQueries
  }
};

module.exports = resolvers;
