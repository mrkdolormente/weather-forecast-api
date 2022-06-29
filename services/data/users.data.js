const pg = require('../../database/connection');

/**
 * @description Get user info
 * @param email Logged in user email
 * @return Promise
 */
const userInfo = (email) => {
  return pg
    .select('firstname', 'lastname', 'email', 'password', 'created_on', 'github')
    .from('users')
    .where({
      email,
    })
    .first();
};

module.exports = {
  userInfo,
};
