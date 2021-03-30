const { requireGql } = require("require-gql");

const About = requireGql("./About");
const EchoResponse = requireGql("./EchoResponse.gql");
const Mutation = requireGql("./Mutation");
const Query = requireGql("./Query");

module.exports = [
  About,
  EchoResponse,
  Mutation,
  Query
];
