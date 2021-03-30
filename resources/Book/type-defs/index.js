const { requireGql } = require("require-gql");

const Book = requireGql("./Book");
const Query = requireGql("./Query")
const Mutation = requireGql("./Mutation");
const BookInput = requireGql("./BookInput");

module.exports = [
  Book,
  Query,
  Mutation,
  BookInput
];
