const User = require("./User");
const UserQueries = require("./Query");

module.exports = {
  UserQueries,
  UserResolvers: {
    User
  }
};
