const echo = (parent, args) => {
  const { input } = args;

  return `Echoing back "${input}".`;
};

module.exports = echo;
