const books = require("./books");

const db = new Map();

for (const book of books) {
  db.set(book.id, book);
}

module.exports = db;
