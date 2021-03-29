module.exports = {
  echo: (parent, args) => {
    const { input } = args;

    return { response: `Echoing back "${input}".` };
  }
};
