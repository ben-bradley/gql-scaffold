const { verify } = require('jsonwebtoken');
const config = require('config');

const context = ({ req }) => {
  const { headers } = req;

  const accessToken = headers['x-access-token'];

  const token = (accessToken) ? verify(accessToken, config.accessToken.secret) : null;

  const nowInSeconds = Date.now() / 1000;

  if (token && token.exp < nowInSeconds) {
    throw new Error('Expired access token!');
  }

  return {
    config,
    token
  };
};

module.exports = context;
