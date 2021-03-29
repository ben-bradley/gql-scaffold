const book = async (parent, args, context) => {
  const { dataSources } = context;

  return dataSources.books.get(args.id);
}

module.exports = book;
