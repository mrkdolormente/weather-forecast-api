const usersData = require('../services/data/users.data');

const userInfo = async (req, res) => {
  const { email } = req.authData;

  const user = await usersData.userInfo(email);
  delete user.password;

  res.json(user);
};

module.exports = {
  userInfo,
};
