const { sign } = require("jsonwebtoken");

const generateTokens = (user, auth) => {
  const { username, roles } = user;

  const accessToken = sign(
    { username, roles },
    auth.accessToken.secret,
    auth.accessToken.options
  );

  const refreshToken = sign(
    { username },
    auth.refreshToken.secret,
    auth.refreshToken.options
  );

  return {
    accessToken,
    refreshToken
  };
};

module.exports = generateTokens;
