const User = {
  id: (parent) => parent.id,
  username: (parent) => parent.username,
  roles: (parent) => parent.roles
};

module.exports = User;
