const { sign } = require('jsonwebtoken');

const SEVEN_DAYS = 60 * 60 * 24 * 7 * 1000;
const FIFTEEN_MINUTES = 60 * 15 * 1000;
const ACCESS_TOKEN_SECRET = 'MYSUPERSECRETACCESSTOKENKEY';
const REFRESH_TOKEN_SECRET = 'MYSUPERSECRETREFRESHTOKENKEY';

const login = async (parent, args, context) => {
  const { dataSources } = context;
  const { username, password } = args;

  const user = await dataSources.users.get(username);

  if (!user)
    return null;
  if (password !== user.password)
    return null;

  const accessToken = sign(
    { username },
    ACCESS_TOKEN_SECRET,
    { expiresIn: FIFTEEN_MINUTES }
  );

  const refreshToken = sign(
    { username },
    REFRESH_TOKEN_SECRET,
    { expiresIn: SEVEN_DAYS }
  )

  return {
    accessToken,
    refreshToken
  };
}

module.exports = login;
