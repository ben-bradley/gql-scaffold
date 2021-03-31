const generateTokens = require('./utils/generateTokens');

const login = async (parent, args, context) => {
  const { dataSources, config } = context;
  const { username, password } = args;

  const user = await dataSources.users.get(username);

  if (!user)
    return null;
  if (password !== user.password)
    return null;

  return generateTokens(user, config);
}

module.exports = login;
