const { requireGql } = require("require-gql");

const AboutTypeDefs = requireGql("./resources/About/type-def.gql");
const BookTypeDefs = requireGql("./resources/Book/type-def.gql");

module.exports = [
  AboutTypeDefs,
  BookTypeDefs
];
