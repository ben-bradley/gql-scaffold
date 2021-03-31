const echo = (parent, args, context) => {
  const { user } = context;
  const { input } = args;

  return `Echoing back "${input}" for ${JSON.stringify(user)}`;
};

module.exports = echo;
