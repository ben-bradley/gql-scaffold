const book = async (parent, args, context) => {
  const { dataSources } = context;

  const book = dataSources.books.get(args.id);

  return book;
}

module.exports = book;
