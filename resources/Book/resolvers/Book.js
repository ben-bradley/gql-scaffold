const Book = {
  title: (parent) => `The title is ${parent.title}`,
  author: (parent) => parent.author
};

module.exports = Book;
