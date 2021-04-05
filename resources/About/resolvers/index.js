const About = require("./About");
const AboutMutations = require("./Mutation");
const AboutQueries = require("./Query");
const EchoResponse = require("./EchoResponse");

module.exports = {
  AboutMutations,
  AboutQueries,
  AboutResolvers: {
    About,
    EchoResponse
  }
};
