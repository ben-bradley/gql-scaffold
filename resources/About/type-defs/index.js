const { requireGql } = require("require-gql");

const About = requireGql("./resources/About/type-defs/About.gql");
const Query = requireGql("./resources/About/type-defs/Query.gql");

module.exports = [
  About,
  Query
];
