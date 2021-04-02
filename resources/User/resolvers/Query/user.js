const user = async (parent, args, context) => {
  const { dataSources } = context;

  return dataSources.users.get(args.username);
}

module.exports = user;
