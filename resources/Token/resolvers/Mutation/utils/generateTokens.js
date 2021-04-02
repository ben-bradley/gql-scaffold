const { sign } = require('jsonwebtoken');

const generateTokens = (user, config) => {
  const { username, roles } = user;

  const accessToken = sign(
    { username, roles },
    config.accessToken.secret,
    config.accessToken.options
  );

  const refreshToken = sign(
    { username },
    config.refreshToken.secret,
    config.refreshToken.options
  );

  return {
    accessToken,
    refreshToken
  };
};

module.exports = generateTokens;
