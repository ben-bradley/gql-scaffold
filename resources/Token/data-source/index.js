const { DataSource } = require("apollo-datasource");

const db = require("./db");

class UserDataSource extends DataSource {
  constructor () {
    super();
    this.db = db;
  }

  initialize ({ context, cache } = {}) {
    this.context = context;
  }

  didEncounterError (error) {
    throw error;
  }

  async get (username) {
    const doc = this.db.get(username);

    return doc;
  }

  // async create (User) {
  //   this.db.set(User.id, User);
  //
  //   return User;
  // }
  //
  // async update (id, update) {
  //   const User = this.db.get(id);
  //
  //   const updatedUser = {
  //     ...User,
  //     ...update
  //   };
  //
  //   this.db.set(id, updatedUser);
  //
  //   return updatedUser;
  // }
}

module.exports = { UserDataSource };
