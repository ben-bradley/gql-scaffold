const contextFn = ({ req }) => {
  const { headers } = req;

  const accessToken = headers['x-access-token'];
  const refreshToken = headers['x-refresh-token'];

  return {
    accessToken,
    refreshToken
  };
};

module.exports = contextFn;
