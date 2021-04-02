const { DataSource } = require("apollo-datasource");

const db = require("./db");

class UserDataSource extends DataSource {
  constructor () {
    super();
    this.db = db;
  }

  initialize ({ context } = {}) {
    this.context = context;
  }

  didEncounterError (error) {
    throw error;
  }

  async get (username) {
    const doc = this.db.get(username);

    return doc;
  }
}

module.exports = UserDataSource;
