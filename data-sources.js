const AboutDataSource = require("./resources/About/data-source");
const BookDataSource = require("./resources/Book/data-source");

const dataSources = () => ({
  about: new AboutDataSource(),
  books: new BookDataSource()
});

module.exports = dataSources;
