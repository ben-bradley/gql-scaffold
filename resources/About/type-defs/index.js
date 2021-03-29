const { requireGql } = require("require-gql");

const About = requireGql("./resources/About/type-defs/About.gql");
const Query = requireGql("./resources/About/type-defs/Query.gql");
const Mutation = requireGql("./resources/About/type-defs/Mutation.gql");

module.exports = [
  About,
  Query,
  Mutation
];
