const echo = (parent, args, context) => {
  const { token } = context;
  const { input } = args;

  return `Echoing back "${input}" for ${token.username}`;
};

module.exports = echo;
