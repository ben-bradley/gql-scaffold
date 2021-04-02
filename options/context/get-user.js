const { UserDataSource } = require("../../resources/User/data-source");

const getUser = async (token) => {
  if (!token)
    return null;

  const userDataSource = new UserDataSource()

  const { username } = token;
  const user = await userDataSource.get(username);

  if (user) {
    user.password = null;
    delete user.password
  }

  return user || null;
};

module.exports = getUser;
