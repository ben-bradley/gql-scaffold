const createBook = (parent, args, context) => {
  const { dataSources } = context;
  const { book } = args;

  book.id = `book-${Date.now()}`;

  return dataSources.books.create(book);
}

module.exports = createBook;
