const { verify } = require("jsonwebtoken");

const getToken = (headers, config) => {
  const accessToken = headers["x-access-token"];

  const token = (accessToken) ? verify(accessToken, config.auth.accessToken.secret) : null;

  const nowInSeconds = Date.now() / 1000;

  if (token && token.exp < nowInSeconds) {
    throw new Error("Expired access token!");
  }

  return token
};

module.exports = getToken;
