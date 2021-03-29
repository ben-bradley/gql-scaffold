const books = async (parent, args, context) => {
  const { dataSources } = context;

  return dataSources.books.getAll();
}

module.exports = books;
