const config = require("config");
const getToken = require("./get-token");
const getUser = require("./get-user");
const setupLogger = require("./logger");

const context = async ({ req }) => {
  const { headers } = req;

  const token = getToken(headers, config);
  const user = (token) ? await getUser(token) : null;
  const logger = setupLogger();

  return {
    config,
    logger,
    token,
    user
  };
};

module.exports = context;
