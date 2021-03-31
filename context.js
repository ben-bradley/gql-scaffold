const { verify } = require('jsonwebtoken');
const config = require('config');

const contextFn = ({ req }) => {
  const { headers } = req;

  const accessToken = headers['x-access-token'];

  const user = (accessToken) ? verify(accessToken, config.accessToken.secret) : null;

  const nowInSeconds = Date.now() / 1000;

  if (user && user.exp < nowInSeconds) {
    throw new Error('Expired access token!');
  }

  return {
    config,
    user
  };
};

module.exports = contextFn;
