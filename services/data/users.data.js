const pg = require('../../database/connection');

const userInfo = (email) => {
  return pg
    .select('firstname', 'lastname', 'email', 'password', 'created_on')
    .from('users')
    .where({
      email,
    })
    .first();
};

module.exports = {
  userInfo,
};
