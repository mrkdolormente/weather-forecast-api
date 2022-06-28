const express = require('express');
const routes = express.Router();

const usersController = require('../controllers/users.controller');
const { verifyToken } = require('../middlewares/verify-token.middleware');

routes.use(verifyToken);

routes.get('/my-info', usersController.userInfo);

module.exports = routes;
