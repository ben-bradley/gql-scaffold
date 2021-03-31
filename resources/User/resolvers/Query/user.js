const user = async (parent, args, context) => {
  const { dataSources, token } = context;

  if (!token || token.username !== args.username)
    throw new Error('Unauthorized!');

  return dataSources.users.get(args.username);
}

module.exports = user;
