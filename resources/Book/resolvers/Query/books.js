const books = async (parent, args, context) => {
  const { dataSources } = context;

  const books = dataSources.books.getAll();

  return books;
}

module.exports = books;
