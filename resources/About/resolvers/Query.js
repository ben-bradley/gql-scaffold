module.exports = {
  about: (parent, args, context) => {
    const { dataSources } = context;

    return dataSources.about.get();
  }
};
