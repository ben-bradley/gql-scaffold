const users = require("./users");

const db = new Map();

for (const user of users) {
  db.set(user.username, user);
}

module.exports = db;
