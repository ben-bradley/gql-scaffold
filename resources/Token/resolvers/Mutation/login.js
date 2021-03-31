const login = async (parent, args, context) => {
  const { dataSources } = context;
  const { username, password } = args;

  // TODO: Perform a user authentication w/ username/password
  const user = await dataSources.users.get(username);

  if (!user)
    return null;
  if (password !== user.password)
    return null;

  return {
    accessToken: `access token for ${username}`,
    refreshToken: `refresh token for ${username}`
  };
}

module.exports = login;
