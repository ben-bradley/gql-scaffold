const AboutTypeDefs = require("../resources/About/type-defs");
const BookTypeDefs = require("../resources/Book/type-defs");
const TokenTypeDefs = require("../resources/Token/type-defs");
const UserTypeDefs = require("../resources/User/type-defs");

module.exports = [
  ...AboutTypeDefs,
  ...BookTypeDefs,
  ...TokenTypeDefs,
  ...UserTypeDefs
];
