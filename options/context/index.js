const config = require("config");
const getToken = require("./get-token");
const setupLogger = require("./logger");

const context = ({ req }) => {
  const { headers } = req;

  const token = getToken(headers, config);
  const logger = setupLogger();

  return {
    config,
    logger,
    token
  };
};

module.exports = context;
