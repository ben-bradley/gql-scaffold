const { requireGql } = require("require-gql");

const User = requireGql("./User");
const UserQuery = requireGql("./Query");

module.exports = [
  User,
  UserQuery
];
