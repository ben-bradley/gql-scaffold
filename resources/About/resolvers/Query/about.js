const about = (parent, args, context) => {
  const { dataSources } = context;

  return dataSources.about.get();
};

module.exports = about;
