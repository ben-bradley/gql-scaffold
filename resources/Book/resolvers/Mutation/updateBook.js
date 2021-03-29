const updateBook = (parent, args, context) => {
  const { dataSources } = context;
  const { id, book } = args;

  return dataSources.books.update(id, book);
}

module.exports = updateBook;
