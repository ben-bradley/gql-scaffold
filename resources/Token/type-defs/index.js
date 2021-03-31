const { requireGql } = require("require-gql");

const Token = requireGql("./Token");
const Mutation = requireGql("./Mutation");

module.exports = [
  Token,
  Mutation
];
