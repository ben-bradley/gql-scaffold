module.exports = {
  about: (parent, args, context) => {
    const { dataSources } = context;

    const about = dataSources.about.get();

    return about;
  }
};
