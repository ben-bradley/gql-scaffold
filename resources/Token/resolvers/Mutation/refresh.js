const { verify } = require('jsonwebtoken');
const generateTokens = require('./utils/generateTokens');

const refresh = async (parent, args, context) => {
  const { config } = context;
  const { refreshToken } = args;

  const token = verify(refreshToken, config.refreshToken.secret);

  const nowInSeconds = Date.now() / 1000;

  if (token && token.exp < nowInSeconds)
    throw new Error('Expired refresh token!');

  return generateTokens(token, config);
}

module.exports = refresh;
