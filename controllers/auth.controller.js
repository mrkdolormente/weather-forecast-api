require('dotenv').config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const usersData = require('../services/data/users.data');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await usersData.userInfo(email);

    if (!user) throw { status: 403 };

    const isEqual = await bcrypt.compare(password, user.password);

    if (!isEqual) throw { status: 403 };

    jwt.sign(user, process.env.SECRET, { expiresIn: process.env.EXPIRES_IN }, (err, token) => {
      if (err) {
        throw { status: 403 };
      } else {
        res.json({
          token,
        });
      }
    });
  } catch (error) {
    res.sendStatus(error.status);
  }
};

module.exports = {
  login,
};
