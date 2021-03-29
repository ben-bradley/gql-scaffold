const AboutQueries = require("./resources/About/resolvers/Query");
const About = require("./resources/About/resolvers/About");

const BookQueries = require("./resources/Book/resolvers/Query");
const Book = require("./resources/Book/resolvers/Book");

const resolvers = {
  About,
  Book,
  Query: {
    ...AboutQueries,
    ...BookQueries
  }
};

module.exports = resolvers;
