const generateTokens = require('./utils/generateTokens');

const login = async (parent, args, context) => {
  const { dataSources, config, logger } = context;
  const { username, password } = args;

  logger('info', `attempting login for ${username}`);
  const user = await dataSources.users.get(username);

  if (!user)
    return null;
  // TODO: this should be bcrypted
  if (password !== user.password)
    return null;

  logger('debug', `login successful for ${username}`);

  return generateTokens(user, config);
}

module.exports = login;
