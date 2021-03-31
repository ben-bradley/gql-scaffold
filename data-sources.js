const { AboutDataSource } = require("./resources/About/data-source");
const { BookDataSource } = require("./resources/Book/data-source");
const { UserDataSource } = require("./resources/Token/data-source");

const dataSources = () => ({
  about: new AboutDataSource(),
  books: new BookDataSource(),
  users: new UserDataSource()
});

module.exports = dataSources;
