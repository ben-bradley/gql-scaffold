const { verify } = require('jsonwebtoken');
const config = require('config');

const contextFn = ({ req }) => {
  const { headers } = req;

  const accessToken = headers['x-access-token'];
  const refreshToken = headers['x-refresh-token'];

  const user = (accessToken) ? verify(accessToken, config.ACCESS_TOKEN_SECRET) : null;

  return {
    config,
    user
  };
};

module.exports = contextFn;
