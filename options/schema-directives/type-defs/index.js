const { requireGql } = require("require-gql");

const SchemaDirectivesTypeDefs = requireGql("./schema-directives");

module.exports = [
  SchemaDirectivesTypeDefs
];
