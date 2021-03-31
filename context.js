const { verify } = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = 'MYSUPERSECRETACCESSTOKENKEY';

const contextFn = ({ req }) => {
  const { headers } = req;

  const accessToken = headers['x-access-token'];
  const refreshToken = headers['x-refresh-token'];

  const user = (accessToken) ? verify(accessToken, ACCESS_TOKEN_SECRET) : null;

  return {
    user
  };
};

module.exports = contextFn;
