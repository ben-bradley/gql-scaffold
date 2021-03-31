const echo = (parent, args, context) => {
  const { user, config } = context;
  const { input } = args;

  return `Echoing back "${input}" for ${JSON.stringify(user)} with a timestamp of ${config.timestamp()}`;
};

module.exports = echo;
