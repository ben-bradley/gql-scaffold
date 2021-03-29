const { requireGql } = require("require-gql");

const Book = requireGql("./resources/Book/type-defs/Book.gql");
const Query = requireGql("./resources/Book/type-defs/Query.gql")
const Mutation = requireGql("./resources/Book/type-defs/Mutation.gql");
const BookInput = requireGql("./resources/Book/type-defs/BookInput.gql");

module.exports = [
  Book,
  Query,
  Mutation,
  BookInput
];
